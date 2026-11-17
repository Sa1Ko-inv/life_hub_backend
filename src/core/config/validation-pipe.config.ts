import { CorsOptions } from '@nestjs/common/internal';
import { ConfigService } from '@nestjs/config';
import { ValidationPipeOptions } from '@nestjs/common';

export function getValidationPipeConfig(): ValidationPipeOptions {
   return {
      transform: true,
      whitelist: true,
   };
}
