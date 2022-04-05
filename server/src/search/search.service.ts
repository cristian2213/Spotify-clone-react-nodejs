import { Injectable } from '@nestjs/common';
// import * as ytdl from 'ytdl-core';
import * as ytsr from 'ytsr';
import { Song } from './dto/song.dto';
import { GlobalMap } from '../utils/map.util';
import { GlobalRandom } from '../utils/random.util';
import {
  LimitDto,
  PageDto,
  RandomDto,
  RanTotalDto,
  SearchDto,
} from './dto/query.dto';

@Injectable()
export class SearchService {
  protected readonly url = 'https://www.youtube.com';
  protected readonly defaultLimit = 1;
  protected readonly defaultPage = 0;

  constructor(
    private readonly globalMap: GlobalMap,
    private readonly globalRandom: GlobalRandom,
  ) {}

  async fetchSongs(
    search: SearchDto,
    limit: LimitDto,
    page: PageDto,
    random: RandomDto,
    total: RanTotalDto,
  ): Promise<Song[]> {
    const defLimit = (limit as unknown as number) || this.defaultLimit;
    console.log(defLimit);
    let songs: Song[];

    if (+random == 1) {
      let i = 1;
      const limit = 12;
      while (i <= limit) {
        try {
          const songsIDs = this.globalRandom.getRandomSongs(total || 12);
          const randomSongs = await this.getMapRandomSongs(songsIDs);

          if (randomSongs.length == 0) {
            i++;
            continue;
          }

          songs = randomSongs;
          break;
        } catch {}
      }
    } else {
      const mappedSearch = this.globalMap.mapSearch(search);
      const { items } = await ytsr(mappedSearch, {
        limit: defLimit,
      });
      const mappedSongs = this.globalMap.mapSongs(items);
      songs = mappedSongs;
    }

    return songs;
  }

  async getMapRandomSongs(randomSongs: Array<string>): Promise<Song[] | any> {
    const totalSongs = randomSongs.length;
    const songs = [];
    for (let i = 0; i < totalSongs; i++) {
      const { items } = await ytsr(randomSongs[i], {
        limit: 1,
      });

      if (items.length < 1) continue;

      songs.push(items[0]);
    }
    const mappedSongs = this.globalMap.mapSongs(songs);
    return mappedSongs;
  }
}
