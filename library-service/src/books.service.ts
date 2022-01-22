/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(id: string): Promise<Book> {
    return this.booksRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.booksRepository.delete(id);
  }

  async create({ title ,synopsis, genres} : {title: string, synopsis: string | null, genres: string[]}) : Promise<void>{
    const book = this.booksRepository.create( { title, synopsis, genres});
    await this.booksRepository.save(book);
  }
}