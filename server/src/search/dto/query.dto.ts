import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SearchDto {
  @ApiProperty({
    required: false,
    type: String,
    example: 'how to fly',
    description:
      'When the search query is used, the "limit" and "page" query will be available too.',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  search: string;
}

export class LimitDto {
  @ApiProperty({
    required: false,
    type: Number,
    example: 1,
    default: 1,
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  limit: number;
}
export class PageDto {
  @ApiProperty({
    required: false,
    type: Number,
    example: 0,
    default: 0,
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  page: number;
}

export class RandomDto {
  @ApiProperty({
    required: false,
    type: Boolean,
    enum: [0, 1],
    description:
      'When this query is actived, you can only use the "ran-total" query.',
    nullable: true,
  })
  @IsOptional()
  @IsBoolean()
  random: boolean;
}

export class RanTotalDto {
  @ApiProperty({
    required: false,
    type: Number,
    example: 1,
    default: 12,
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  'ran-total': number;
}
