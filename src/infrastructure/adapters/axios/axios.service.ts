import {
  ComicsDto,
  findOneComicsDto,
} from '@/presentation/dto/marvel-findone-comics.dto';
import { MarvelComicsDto } from '@/presentation/dto/mavel-comics.dto';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, lastValueFrom, map } from 'rxjs';

@Injectable()
export class AxiosService {
  logger = new Logger(AxiosService.name);
  constructor(private readonly httpService: HttpService) {}
  async getListComics() {
    const response$ = this.httpService
      .get<MarvelComicsDto>(
        'http://gateway.marvel.com/v1/public/comics?limit=100&offset=200&ts=200&apikey=f68eb4c2e95cafeb74ad1b49376ecc6b&hash=e5649f22ff3568b9122eb3ed126aa7e3',
      )
      .pipe(
        map((response) => response.data),
        map((response) => response.data),
        map((response) => response.results),
        map((response) =>
          response.map((resp) => {
            return {
              title: resp.title,
              images: `${resp.thumbnail.path}.${resp.thumbnail.extension}`,
              id: resp.id,
              price: resp.prices,
            };
          }),
        ),
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      );

    return await lastValueFrom(response$);
  }
  async getFindOne(id: string): Promise<ComicsDto> {
    const response$ = this.httpService
      .get<findOneComicsDto>(
        `http://gateway.marvel.com/v1/public/comics/${id}?&ts=200&apikey=f68eb4c2e95cafeb74ad1b49376ecc6b&hash=e5649f22ff3568b9122eb3ed126aa7e3`,
      )
      .pipe(
        map((response) => response.data),
        map((response) => response.data),
        map((response) => response.results),
        map((response) => {
          return {
            id: response[0].id,
            title: response[0].title,
            description: response[0].description,
            creators: response[0].creators.items.map((creator) => ({
              name: creator.name,
              role: creator.role,
            })),
            series: response[0].series.name,
            year: this.extractYears(response[0].series.name),
            image: `${response[0].thumbnail.path}.${response[0].thumbnail.extension}`,
            images: response[0].images.map(
              (re) => `${re.path}.${re.extension}`,
            ),
          };
        }),
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      );

    const aa = await lastValueFrom(response$);
    // console.log('TCL: AxiosService -> getFindOne -> aa', JSON.stringify(aa));
    return aa as any;
  }
  extractYears(titles) {
    console.log('TCL: AxiosService -> extractYears -> titles', titles);
    const yearMatch = titles.match(/(\d{4})/);
    return yearMatch ? yearMatch[1] : null;
  }
}
