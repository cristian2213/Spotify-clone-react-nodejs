import { Controller, Get, Query } from '@nestjs/common';
import { DownloadAudioService } from './download-audio.service';

@Controller('download')
export class DownloadAudioController {
  constructor(private readonly downloadAudioService: DownloadAudioService) {}

  @Get()
  downloadAudio(@Query('query') query: string) {
    return this.downloadAudioService.downloadAudio(query);
  }
}
