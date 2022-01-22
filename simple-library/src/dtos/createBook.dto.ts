import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateBookDto {
  @IsNotEmpty()
  title: string;
  synopsis: string | null;
  genres: string[];
}
