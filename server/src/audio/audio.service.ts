import { Injectable, NotFoundException } from '@nestjs/common';
import * as ytdl from 'ytdl-core';
import * as ytsr from 'ytsr';

@Injectable()
export class AudioService {
  protected readonly url = 'https://www.youtube.com';
  protected readonly defaultLimit = 1;
  protected readonly defaultPage = 1;

  async fetchSong(url: string) {
    // 1. validate url (validateID)

    const URL = `${this.url}/${url}`;
    const res = await ytdl.getBasicInfo(URL);
    if (!res) throw new NotFoundException(`Song didn't find`);
    return res.videoDetails;
  }

  async fetchSongs(search: string, limit: number, page: number): Promise<any> {
    const defLimit = limit || this.defaultLimit;
    const defPage = page || this.defaultPage;

    const mappedSearch = this.mapSearch(search);
    const { items } = await ytsr(mappedSearch, {
      pages: defPage,
      limit: defLimit,
    });

    if (items.length === 0) return items;

    // #0 - Define object structure
    // #1 - Map songs
    // #2 - Get the best option
    // #3 - Map bestThumbnail
    // #4 - Map variables
    // #5 - Create swagger documentation

    return items;
  }

  mapSearch(search: string): string {
    const mapped = search
      .toLowerCase()
      .trim()
      .split(/[-,._:; ]/g)
      .join(' ')
      .trim();
    console.log(mapped);
    return mapped;
  }
}
