import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarvelRepositoryImpl } from '../repository-impl/marvel.repositoryImpl';
import { ComicsTables } from '@/infrastructure/database/entitys/ComicsTables.entity';
import { AxiosService } from '@/infrastructure/adapters/axios/axios.service';

@Injectable()
export class MarvelRepository implements MarvelRepositoryImpl {
  constructor(
    @InjectRepository(ComicsTables)
    private transactionRepository: Repository<ComicsTables>,
    private readonly axiosservice: AxiosService,
  ) {}
  async findAll(): Promise<any> {
    return await this.axiosservice.getListComics();
  }
}
