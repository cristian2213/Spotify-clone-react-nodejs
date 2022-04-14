import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DownloadAudioService } from './download-audio.service';
import { DownloadAudioController } from './download-audio.controller';
import { Song } from './entities/song.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [DownloadAudioController],
  providers: [DownloadAudioService],
})
export class DownloadAudioModule {}
