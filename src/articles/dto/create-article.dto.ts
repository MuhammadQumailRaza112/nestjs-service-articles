import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({ required: true })
  @IsString()
  @MinLength(2)
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  body: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean = false;

  @ApiProperty({ required: false })
  @IsOptional()
  description?: string;
}
