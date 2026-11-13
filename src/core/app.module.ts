import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
     isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
