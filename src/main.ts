import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('main.ts');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = 3044;
  await app.listen(port, () => {
    logger.log(`puerto ${port}`);
  });
}
bootstrap();
