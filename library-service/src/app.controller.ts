import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Book } from './books.entity';
import { BooksService } from './books.service';
import { UpdateBookDto } from './dtos/updateBook.dto';

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

  @MessagePattern({ cmd: 'getAllBooks' })
  async getAllBooks(): Promise<Book[]> {
    return await this.booksService.findAll();
  }

  @MessagePattern({ cmd: 'deleteBookById' })
  async deleteBookById(data: number): Promise<void> {
    return await this.booksService.remove(data);
  }

  @MessagePattern({ cmd: 'updateBookById' })
  async updateBookById(data: UpdateBookDto) {
    return await this.booksService.update(data);
  }
}
