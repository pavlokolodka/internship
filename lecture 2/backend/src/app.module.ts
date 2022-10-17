import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwapiModule } from './swapi/swapi.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [SwapiModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
