import { Module } from '@nestjs/common';
import { ListComicsUseCase } from './ListComics.usecase';
import { repositoriesModule } from '@/infrastructure/repositories/repositories.module';
import { findOneComicsUseCase } from './findOneComics.usecase';

@Module({
  imports: [repositoriesModule],
  providers: [ListComicsUseCase, findOneComicsUseCase],
  exports: [ListComicsUseCase, findOneComicsUseCase],
})
export class ApplicationModule {}
