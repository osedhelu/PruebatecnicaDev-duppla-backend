import { Module } from '@nestjs/common';
import { ComicsTables } from './entitys/ComicsTables.entity';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatorTable } from './entitys/CreatorTable.entity';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: '../db.sqlite',
  entities: [ComicsTables, CreatorTable],
  synchronize: true,
};
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([ComicsTables, CreatorTable]),
  ],
  exports: [TypeOrmModule],
})
export class databaseModule {}
