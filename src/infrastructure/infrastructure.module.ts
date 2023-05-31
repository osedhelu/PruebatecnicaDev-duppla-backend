import { Module } from '@nestjs/common';
import { repositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [repositoriesModule],
})
export class infrastructureModule {}
