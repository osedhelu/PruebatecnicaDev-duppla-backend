import { Module } from '@nestjs/common';
import { MarvelRepository } from './repositories/marvel.repository';
import { databaseModule } from '../database/database.module';

const getAllImport = [
  {
    provide: 'MarvelRepositoryImpl',
    useClass: MarvelRepository,
  },
];
@Module({
  imports: [databaseModule],
  providers: getAllImport,
  exports: getAllImport,
})
export class repositoriesModule {}
