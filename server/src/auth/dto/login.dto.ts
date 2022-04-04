import {
  IsEmail,
  IsInt,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    required: false,
    type: Number,
    example: 1,
    description: 'User id',
    nullable: true,
  })
  @IsInt()
  readonly id: number;

  @ApiProperty({
    required: true,
    type: String,
    description: 'User email',
    example: 'admin@gmail.com',
    nullable: false,
    minLength: 8,
    maxLength: 150,
  })
  @IsEmail()
  @MinLength(8)
  @MaxLength(150)
  readonly email: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'User password',
    example: 'admin123',
    nullable: false,
    minLength: 8,
    maxLength: 255,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(255)
  readonly password: string;
}
