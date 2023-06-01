import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarvelRepositoryImpl } from '../repository-impl/marvel.repositoryImpl';
import { ComicsTables } from '@/infrastructure/database/entitys/ComicsTables.entity';
import { AxiosService } from '@/infrastructure/adapters/axios/axios.service';
import { ComicsDto } from '@/presentation/dto/marvel-findone-comics.dto';
import { CreatorTable } from '@/infrastructure/database/entitys/CreatorTable.entity';

@Injectable()
export class MarvelRepository implements MarvelRepositoryImpl {
  constructor(
    @InjectRepository(ComicsTables)
    private comicRepository: Repository<ComicsTables>,
    @InjectRepository(CreatorTable)
    private creatorRepository: Repository<CreatorTable>,
    private readonly axiosservice: AxiosService,
  ) {}
  async findOne(id: string): Promise<any> {
    let comic = await this.findOneComicDB(id);

    if (!comic) {
      const comicData = await this.axiosservice.getFindOne(id);
      comic = await this.saveAllData(comicData);
    }

    return await this.axiosservice.getFindOne(id);
  }
  async findAll(): Promise<any> {
    return await this.axiosservice.getListComics();
  }
  async saveAllData(data: ComicsDto): Promise<any> {
    const savedCreators = await Promise.all(
      data.creators.map((creator) => this.creatorRepository.save(creator)),
    );
    const aa = await this.comicRepository.create({
      description: data.description,
      idComics: data.id,
      image: data.image,
      images: data.images,
      series: data.series,
      creators: savedCreators,
      title: data.title,
      year: data.year,
    });

    this.comicRepository.save(aa);
    console.log('TCL: MarvelRepository -> aa', aa);
    return aa;
  }

  async findOneComicDB(id: string): Promise<ComicsTables | undefined> {
    return await this.comicRepository.findOne({
      where: {
        idComics: id,
      },
    });
  }
}
