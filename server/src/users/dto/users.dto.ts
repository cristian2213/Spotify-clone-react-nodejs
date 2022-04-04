import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UserDataDto {
  @ApiProperty({
    required: true,
    type: String,
    example: 'admin123',
    description: 'User name',
    nullable: false,
  })
  @IsString()
  @MinLength(4)
  @MaxLength(150)
  name: string;

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
  email: string;

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
  password: string;
}
