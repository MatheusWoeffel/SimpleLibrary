import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BookDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional()
  synopsis: string | null;
  
  @ApiProperty()
  genres: string[];
}
