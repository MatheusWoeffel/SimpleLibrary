import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './books.entity';
import { BooksModule } from './books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'password',
      database: 'SimpleLibrary',
      entities: [Book],
      synchronize: true,
    }),
    BooksModule,
  ],
  controllers: [LibraryController],
  providers: [AppService],
})
export class AppModule {}
