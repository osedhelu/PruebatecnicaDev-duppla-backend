import { findOneComicsDto } from '@/presentation/dto/marvel-findone-comics.dto';
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
        'http://gateway.marvel.com/v1/public/comics?ts=10&apikey=f68eb4c2e95cafeb74ad1b49376ecc6b&hash=83884137d5dbc139510afa66bab5ed9e',
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

    const data = await lastValueFrom(response$);
    console.log('TCL: AxiosService -> getListComics -> data', data);
    return data;
  }
  async getFindOne(id: string) {
    const response$ = this.httpService
      .get<findOneComicsDto>(
        `http://gateway.marvel.com/v1/public/comics/${id}?ts=10&apikey=f68eb4c2e95cafeb74ad1b49376ecc6b&hash=83884137d5dbc139510afa66bab5ed9e`,
      )
      .pipe(
        map((response) => response.data),
        map((response) => response.data),
        map((response) => response.results),
        map((response) => ({
          title: response[0].title,
          description: response[0].description,
          image: `${response[0].thumbnail.path}.${response[0].thumbnail.extension}`,
          images: response[0].images.map((re) => `${re.path}.${re.extension}`),
        })),
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      );

    const data = await lastValueFrom(response$);
    console.log('TCL: AxiosService -> getListComics -> data', data);
    return data;
  }
}
