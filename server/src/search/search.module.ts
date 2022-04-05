import { SearchController } from './search.controller';
import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { GlobalMap } from '../utils/map.util';
import { GlobalRandom } from '../utils/random.util';

@Module({
  controllers: [SearchController],
  providers: [SearchService, GlobalMap, GlobalRandom],
  exports: [SearchService],
})
export class SearchModule {}
