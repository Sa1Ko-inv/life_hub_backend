import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
   public getHello() {
      return { message: 'Welcome to Life Hub API' };
   }

   public healthCheck() {
      return { status: 'ok', timestamp: new Date().toISOString() };
   }
}
