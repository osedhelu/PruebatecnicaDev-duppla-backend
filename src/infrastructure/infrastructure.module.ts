import { Module } from '@nestjs/common';
import { repositoriesModule } from './repositories/repositories.module';
import { databaseModule } from './database/database.module';

@Module({
  imports: [repositoriesModule, databaseModule],
})
export class infrastructureModule {}
