import { Test, TestingModule } from '@nestjs/testing';
import { LibraryController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: LibraryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LibraryController],
      providers: [AppService],
    }).compile();

    appController = app.get<LibraryController>(LibraryController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
