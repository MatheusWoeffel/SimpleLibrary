import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsDefined, IsNotEmpty, IsOptional } from "class-validator";

/* eslint-disable prettier/prettier */
export class UpdateBookDto {
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
