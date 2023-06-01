import { ListComicsUseCase } from '@/application/ListComics.usecase';
import { findOneComicsUseCase } from '@/application/findOneComics.usecase';
import { Body, Controller, Get, Param } from '@nestjs/common';

@Controller()
export class MarvelController {
  constructor(
    private readonly listcomicsusecase: ListComicsUseCase,
    private readonly findOneUseCase: findOneComicsUseCase,
  ) {}

  @Get()
  async ListAllComics(): Promise<any> {
    return await this.listcomicsusecase.handler();
  }
  @Get('/:id')
  async findOneComics(@Param('id') id: string) {
    return this.findOneUseCase.handler(id);
  }
}
