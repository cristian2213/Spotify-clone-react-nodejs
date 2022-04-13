import { Test, TestingModule } from '@nestjs/testing';
import { DownloadAudioService } from './download-audio.service';

describe('DownloadAudioService', () => {
  let service: DownloadAudioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DownloadAudioService],
    }).compile();

    service = module.get<DownloadAudioService>(DownloadAudioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
