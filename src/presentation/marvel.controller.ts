import { ListComicsUseCase } from '@/application/ListComics.usecase';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class MarvelController {
  constructor(private readonly listcomicsusecase: ListComicsUseCase) {}

  @Get()
  async ListAllComics(): Promise<any> {
    return await this.listcomicsusecase.handler();
  }
}
