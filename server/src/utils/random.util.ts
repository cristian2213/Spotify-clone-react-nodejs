import { RanTotalDto } from '../search/dto/query.dto';
import * as ytdl from 'ytdl-core';

export class GlobalRandom {
  public randomSongs = [
    '6pw3Uo4htB4',
    'iFWbQXrcDJQ',
    'XgzGrpisMjE',
    '8ui9umU0C2g',
    'XZm3TKMZXJ4',
    'R1UKHQHsHCM',
    'XtZL5q-LGnM',
    'yMyz8xVp8-s',
    'BgK_Er7WZVg',
    'sBzrzS1Ag_g',
    'm2uTFF_3MaA',
    'yKNxeF4KMsY',
    'aGcWaN9cbwg',
  ];

  public getRandomSongs(totalSongs: number | RanTotalDto): Array<string> {
    let limit = totalSongs;
    let i = 1;
    const songs = [];
    while (limit >= i) {
      const random = Math.floor(Math.random() * this.randomSongs.length);
      const songID = this.randomSongs[random];
      const isValidID = ytdl.validateID(songID);

      if (!isValidID) continue;
      songs.push(songID);
      i++;
    }

    return songs;
  }
}
