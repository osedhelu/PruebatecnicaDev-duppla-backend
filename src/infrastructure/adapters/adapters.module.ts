import { Module } from '@nestjs/common';
import { AxiosService } from './axios/axios.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [AxiosService],
  exports: [AxiosService],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
})
export class AdaptersModule {}
