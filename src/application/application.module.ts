import { Module } from '@nestjs/common';
import { ListComicsUseCase } from './ListComics.usecase';
import { repositoriesModule } from '@/infrastructure/repositories/repositories.module';

@Module({
  imports: [repositoriesModule],
  providers: [ListComicsUseCase],
  exports: [ListComicsUseCase],
})
export class ApplicationModule {}
