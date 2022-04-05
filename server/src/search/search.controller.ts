import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import {
  Controller,
  Get,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SearchService } from './search.service';
import {
  LimitDto,
  PageDto,
  RandomDto,
  RanTotalDto,
  SearchDto,
} from './dto/query.dto';

@ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @ApiOperation({ summary: 'Get all songs' })
  @ApiQuery({
    allowEmptyValue: true,
    name: 'search',
    type: SearchDto,
    required: false,
  })
  @ApiQuery({
    allowEmptyValue: true,
    name: 'limit',
    type: LimitDto,
    required: false,
  })
  @ApiQuery({
    allowEmptyValue: true,
    name: 'page',
    type: PageDto,
    required: false,
  })
  @ApiQuery({
    allowEmptyValue: true,
    name: 'random',
    type: RandomDto,
    required: false,
  })
  @ApiQuery({
    allowEmptyValue: true,
    name: 'ran-total',
    type: RanTotalDto,
    required: false,
  })
  @Get()
  getSongs(
    @Query('search') search: SearchDto,
    @Query('limit') limit: LimitDto,
    @Query('page') page: PageDto,
    @Query('random') random: RandomDto,
    @Query('ran-total') ranTotal: RanTotalDto,
  ) {
    return this.searchService.fetchSongs(search, limit, page, random, ranTotal);
  }
}
