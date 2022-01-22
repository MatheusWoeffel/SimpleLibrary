/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AppService } from './app.service';
import { BookDto } from './dtos/book.dto';
import { CreateBookDto } from './dtos/createBook.dto';
import { UpdateBookDto } from './dtos/updateBook.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('LIBRARY_SERVICE') private client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/book")
  async createBook(@Body() createBookDto: CreateBookDto): Promise<string>{
    const result = this.client.send<void>({cmd: "createBook"}, { title: createBookDto.title, synopsis: createBookDto.synopsis, genres: createBookDto.genres});
    await firstValueFrom(result, {defaultValue: undefined});

    return "Book created Sucessfully";
  }

  @Get("book")
  async getBookById(@Query() id: number) : Promise<BookDto>{
    const result = this.client.send<BookDto>({cmd: "getBookById"}, id);
    
    try{
      const book = await firstValueFrom(result);
      return book;
    }
    catch{
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: "There's no book with the given id.",
      }, HttpStatus.NOT_FOUND);
    }
  }

  @Get("book/all")
  async getAllBooks() : Promise<BookDto[]>{
    const result = this.client.send<BookDto[]>({cmd: "getAllBooks"}, {});

    const books = await firstValueFrom(result);
    return books;
  }

  @Delete("/book")
  async deleteBook(@Query() id): Promise<string> {
    const result = this.client.send<void>({cmd: "deleteBookById"}, id);
    await firstValueFrom(result, { defaultValue: undefined});

    return "Book deleted sucessfully";
  }

  @Put("/book/:id")
  async updateBook(@Param() id, @Body() updateBookDto : UpdateBookDto): Promise<string> {
    const result = this.client.send<void>({cmd: "updateBookById"}, {id, ...updateBookDto});
    await firstValueFrom(result, { defaultValue: undefined});

    return "Book updated sucessfully";
  }
}
