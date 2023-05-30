import { Module } from '@nestjs/common';
import { MarvelRepository } from './repositories/marvel.repository';

const getAllImport = [
  {
    provide: 'MarvelRepositoryImpl',
    useClass: MarvelRepository,
  },
];
@Module({
  providers: getAllImport,
  exports: getAllImport,
})
export class repositoriesModule {}
