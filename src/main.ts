import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module.js';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getCorsConfig } from './core/config/index.js';
import {getSwaggerConfig} from "./core/config/index.js";

async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   const config = app.get(ConfigService);
   const logger = new Logger();

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
