import { Module } from '@nestjs/common';
import { ComicsTables } from './entitys/ComicsTables.entity';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { TypeOrmModule } from '@nestjs/typeorm';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: '../db.sqlite',
  entities: [ComicsTables],
  synchronize: true,
};
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([ComicsTables]),
  ],
  exports: [TypeOrmModule],
})
export class databaseModule {}
