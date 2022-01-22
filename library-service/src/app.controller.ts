import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Book } from './books.entity';
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

  @MessagePattern({ cmd: 'getBookById' })
  async getBookById(data: number): Promise<Book> {
    return await this.booksService.findOne(data);
  }
}
