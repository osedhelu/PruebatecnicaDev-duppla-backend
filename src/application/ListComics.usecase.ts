import { MarvelRepositoryImpl } from '@/infrastructure/repositories/repository-impl/marvel.repositoryImpl';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class BalanceOfUseCase {
  constructor(
    @Inject('MarvelRepositoryImpl')
    private marvelRepository: MarvelRepositoryImpl,
  ) {}
  public async handler(): Promise<any> {
    return await this.marvelRepository.findAll();
  }
}
