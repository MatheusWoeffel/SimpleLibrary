import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BooksService } from './books.service';

type CreateBookDTO = {
  title: string;
  synopsis: string | null;
  genres: string[];
};

@Controller()
export class LibraryController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern({ cmd: 'createBook' })
  async createBook(data: CreateBookDTO): Promise<void> {
    await this.booksService.create(data);
  }
}
