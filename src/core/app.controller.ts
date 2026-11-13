import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
   public constructor(private readonly appService: AppService) {}

   @ApiOperation({
      summary: 'Welcome endpoint',
      description: 'Returns a hello message',
   })
   @Get()
   public getHello() {
      return this.appService.getHello();
   }

   @ApiOperation({
      summary: 'Health check endpoint',
      description: 'Checks if the Gateway is running',
   })
   @Get('health')
   public healthCheck() {
      return this.appService.healthCheck();
   }
}
