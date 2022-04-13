import { join } from 'path';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as fs from 'fs';
import * as ydtl from 'ytdl-core';

@Injectable()
export class DownloadAudioService {
  private readonly URL = 'http://www.youtube.com/watch?v=';

  async downloadAudio(query: string): Promise<any> {
    if (!query)
      throw new BadRequestException('The "query" param cannot be null');

    const path = join(__dirname, '..', '..', 'storage');

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, {
        recursive: true,
      });
    }

    try {
      const songName = await new Promise((resolve, reject) => {
        const search = `${this.URL}${query}`;
        const download = ydtl(search, { filter: 'audioonly' });
        const fileName = `${query.split(' ').join('-')}-${Date.now()}.mp3`;

        const writeStream = fs.createWriteStream(join(path, fileName));
        download.pipe(writeStream);
        download.on('end', () => {
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
