import { join, parse } from 'path';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as fs from 'fs';
import * as ydtl from 'ytdl-core';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DownloadAudioService {
  constructor(
    @InjectRepository(Song) private songRepository: Repository<Song>,
  ) {}

  private readonly URL = 'http://www.youtube.com/watch?v=';

  async downloadAudio(query: string): Promise<any> {
    if (!query)
      throw new BadRequestException('The "query" param cannot be null');

    try {
      const path = join(__dirname, '..', '..', 'storage');
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path, {
          recursive: true,
        });
      }
      const searching = query.split(' ').join('-');
      const song = await this.songRepository.findOne({
        where: {
          name: searching,
        },
      });

      if (song) {
        const { path: absPath } = song;
        if (fs.existsSync(absPath)) {
          const { base } = parse(absPath);
          return {
            songName: base,
          };
        }
      }

      const songName = await new Promise((resolve, reject) => {
        const search = `${this.URL}${query}`;
        const download = ydtl(search, {
          filter: 'audioonly',
          quality: 'highestaudio',
        });
        const fileName = `${searching}-${Date.now()}.mp3`;

        const fullPath = join(path, fileName);
        const writeStream = fs.createWriteStream(fullPath);
        download.pipe(writeStream);
        download.on('end', async () => {
          const newSong = this.songRepository.create({
            name: searching,
            path: fullPath,
          });
          await this.songRepository.save(newSong);
          resolve(fileName);
        });

        download.on('error', (err) => {
          reject(err);
        });
      });

      return {
        songName,
      };
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
