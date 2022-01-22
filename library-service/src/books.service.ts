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

  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }

  async create({ title ,synopsis, genres} : {title: string, synopsis: string | null, genres: string[]}) : Promise<void>{
    const book = this.booksRepository.create( { title, synopsis, genres});
    await this.booksRepository.save(book);
  }

  async update({id, title ,synopsis, genres} : {id: number, title: string, synopsis: string | null, genres: string[]}) : Promise<void>{
    const book = await this.booksRepository.findOne(id);
    book.title = title;
    book.synopsis = synopsis;
    book.genres = genres;

    await this.booksRepository.save(book);
  }
}