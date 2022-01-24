/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'LIBRARY_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
    } },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
