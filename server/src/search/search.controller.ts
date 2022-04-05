import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SearchService } from './search.service';

@ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @ApiOperation({ summary: 'Get all songs' })
  @Get()
  getSongs(
    @Query('search') search: string,
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Query('random') random: boolean,
    @Query('ran-total') total: number,
  ) {
    return this.searchService.fetchSongs(search, limit, page, random, total);
  }
}
