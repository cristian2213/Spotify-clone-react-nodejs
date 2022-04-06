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

    let songs: Song[];

    if (+random == 1) {
      let i = 1;
      const limit = 12;
      const songsIDs = this.globalRandom.getRandomSongs(total || 12);
      const randomSongs = await this.getMapRandomSongs(songsIDs);
      songs = randomSongs;
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
    let i = 0;
    let attempts = 0;
    while (i < totalSongs) {
      const songID = randomSongs[i];
      const { items } = await ytsr(songID, {
        limit: 1,
      });

      if (items == undefined || items.length < 1) {
        if (attempts === totalSongs * 3) break;
        attempts++;
        continue;
      }

      songs.push(items[0]);
      i++;
    }

    const mappedSongs = this.globalMap.mapSongs(songs);
    return mappedSongs;
  }
}
