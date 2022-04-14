import { RanTotalDto } from '../search/dto/query.dto';
import * as ytdl from 'ytdl-core';

export class GlobalRandom {
  public randomSongs = [
    'new beginnings luke faulkner',
    'sticky fingers how to fly',
    'sticky fingers rum rage',
    'sticky fingers saves the day',
    'sticky fingers lekkerboy',
    'ballade - luke faulkner',
    'Etude Op. 36 | BLUMENFELD | Luke Faulkner',
    'Étude in F major | ROMANTIC PIANO | Luke Faulkner',
    'Daydreaming - Luke Faulkner',
    'Beethoven - Für Elise (Piano Version)',
    'Moonlight Sonata: Adagio Sostenuto',
    'Chopin - Nocturne op.9 No.2',
  ];

  public getRandomSongs(totalSongs: number | RanTotalDto): Array<string> {
    let limit = totalSongs;
    let i = 1;
    const songs = [];
    // while (limit >= i) {
    // const random = Math.floor(Math.random() * this.randomSongs.length);
    // const songID = this.randomSongs[random];
    // const isValidID = ytdl.validateID(songID);
    // if (!isValidID) continue;
    // songs.push(songID);
    // i++;
    // }

    // return songs;
    return this.randomSongs;
  }
}
