import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module.js';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { getCorsConfig, getValidationPipeConfig } from './core/config/index.js';
import { getSwaggerConfig } from './core/config/index.js';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   const config = app.get(ConfigService);
   const logger = new Logger();

   app.useGlobalPipes(new ValidationPipe(getValidationPipeConfig()));

   app.enableCors(getCorsConfig(config));

   const swaggerDocument = SwaggerModule.createDocument(app, getSwaggerConfig());

   SwaggerModule.setup('/docs', app, swaggerDocument, {
      yamlDocumentUrl: '/openapi.yaml',
   });

   const port = config.getOrThrow<number>('HTTP_PORT');
   const host = config.getOrThrow<string>('HTTP_HOST');

   await app.listen(port);

   logger.log(`🚀 Сервер запущен на: ${host}`);
   logger.log(`📚 Swagger запущен на: ${host}/docs`);
}

await bootstrap();
