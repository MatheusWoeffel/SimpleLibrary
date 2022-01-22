/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateBookDto } from './dtos/createBook.dto';

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

  @Post("/book/create")
  async createBook(@Body() createBookDto: CreateBookDto): Promise<string>{
    const result = this.client.send<void>({cmd: "createBook"}, { title: createBookDto.title, synopsis: createBookDto.synopsis, genres: createBookDto.genres});
    await result.toPromise();

    return "ok";
  }
}
