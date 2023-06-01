import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@prisma/client';

export class ArticleEntity implements Article {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false })
  published: boolean;

  @ApiProperty()
  createAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
