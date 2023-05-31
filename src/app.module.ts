import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { infrastructureModule } from './infrastructure/infrastructure.module';
import { MarvelController } from './presentation/marvel.controller';

@Module({
  imports: [ApplicationModule, infrastructureModule],
  controllers: [MarvelController],
  providers: [],
})
export class AppModule {}
