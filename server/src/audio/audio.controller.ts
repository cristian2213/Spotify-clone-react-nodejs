import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { AudioService } from './audio.service';

@ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@ApiTags('Audio')
@Controller('audio')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @ApiOperation({ summary: 'Get all songs' })
  @Get()
  getSongs(
    @Query('search') search: string,
    @Query('limit') limit: number,
    @Query('page') page: number,
  ) {
    return this.audioService.fetchSongs(search, limit, page);
  }

  @ApiOperation({ summary: 'Get one song' })
  @Get(':url')
  getSong(@Param('url') url: string) {
    return this.audioService.fetchSong(url);
  }
}
