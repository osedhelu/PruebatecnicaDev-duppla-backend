import { Module } from '@nestjs/common';
import { databaseModule } from './database/database.module';
import { repositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [repositoriesModule, databaseModule],
})
export class infrastructureModule {}
