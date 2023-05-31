import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarvelRepositoryImpl } from '../repository-impl/marvel.repositoryImpl';
import { ComicsTables } from '@/infrastructure/database/entitys/ComicsTables.entity';

@Injectable()
export class MarvelRepository implements MarvelRepositoryImpl {
  constructor(
    @InjectRepository(ComicsTables)
    private transactionRepository: Repository<ComicsTables>,
  ) {}
  findAll(): Promise<any> {
    // TODO: crear el metodo para listar todos los Comics de marvel
    return 'hola mundo' as any;
  }
}
