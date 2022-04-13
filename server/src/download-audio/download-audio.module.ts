import { Module } from '@nestjs/common';
import { DownloadAudioService } from './download-audio.service';
import { DownloadAudioController } from './download-audio.controller';

@Module({
  controllers: [DownloadAudioController],
  providers: [DownloadAudioService]
})
export class DownloadAudioModule {}
