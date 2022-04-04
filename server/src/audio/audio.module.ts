import { AudioController } from './audio.controller';
import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';

@Module({
  controllers: [AudioController],
  providers: [AudioService],
  exports: [AudioService],
})
export class AudioModule {}
