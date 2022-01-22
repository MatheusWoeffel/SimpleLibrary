import { IsArray, IsDefined, IsNotEmpty, IsOptional } from "class-validator";

/* eslint-disable prettier/prettier */
export class UpdateBookDto {
  @IsNotEmpty()
  title: string;
  @IsOptional()
  synopsis: string | null;
  
  @IsArray()
  @IsDefined()
  genres: string[];
}
