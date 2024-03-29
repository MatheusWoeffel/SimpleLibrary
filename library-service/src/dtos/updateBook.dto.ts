import { IsArray, IsDefined, IsNotEmpty, IsOptional } from "class-validator";
/* eslint-disable prettier/prettier */
export class UpdateBookDto {
  @IsDefined()
  id: number;

  @IsNotEmpty()
  title: string;
  
  @IsOptional()
  synopsis: string | null;
  
  @IsArray()
  @IsDefined()
  genres: string[];
}
