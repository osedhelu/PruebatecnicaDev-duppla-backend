import { Module } from '@nestjs/common';
import { ComicsTables } from './entitys/ComicsTables.entity';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { TypeOrmModule } from '@nestjs/typeorm';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: '../db',
  entities: [ComicsTables],
  synchronize: true,
};
@Module({
  imports: [TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class databaseModule {}
