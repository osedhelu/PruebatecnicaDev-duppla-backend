import { Module } from '@nestjs/common';
import { MarvelRepository } from './repositories/marvel.repository';
import { databaseModule } from '../database/database.module';
import { AdaptersModule } from '../adapters/adapters.module';

const getAllImport = [
  {
    provide: 'MarvelRepositoryImpl',
    useClass: MarvelRepository,
  },
];
@Module({
  imports: [databaseModule, AdaptersModule],
  providers: getAllImport,
  exports: getAllImport,
})
export class repositoriesModule {}
