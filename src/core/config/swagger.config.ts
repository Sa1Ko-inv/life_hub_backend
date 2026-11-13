import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerConfig() {
   return new DocumentBuilder()
      .setTitle('Life Hub')
      .setDescription('Life Hub API')
      .setVersion('1.0')
      .build();
}
