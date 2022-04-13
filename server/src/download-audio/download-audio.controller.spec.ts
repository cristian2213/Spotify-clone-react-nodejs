import { Test, TestingModule } from '@nestjs/testing';
import { DownloadAudioController } from './download-audio.controller';
import { DownloadAudioService } from './download-audio.service';

describe('DownloadAudioController', () => {
  let controller: DownloadAudioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DownloadAudioController],
      providers: [DownloadAudioService],
    }).compile();

    controller = module.get<DownloadAudioController>(DownloadAudioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
