import { IsArray, IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
/* eslint-disable prettier/prettier */
export class CreateBookDto {
  @IsNotEmpty()
  @ApiProperty()
  title: string;
  
  @IsOptional()
  @ApiPropertyOptional()
  synopsis: string | null;
  
  @IsArray()
  @IsDefined()
  @ApiProperty()
  genres: string[];
}
