import { MarvelRepositoryImpl } from '@/infrastructure/repositories/repository-impl/marvel.repositoryImpl';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class findOneComicsUseCase {
  constructor(
    @Inject('MarvelRepositoryImpl')
    private marvelRepository: MarvelRepositoryImpl,
  ) {}
  public async handler(id: string): Promise<any> {
    return await this.marvelRepository.findOne(id);
  }
}
