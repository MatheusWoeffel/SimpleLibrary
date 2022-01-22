export class UpdateBookDto {
  id: number;
  title: string;
  synopsis: string | null;
  genres: string[];
}