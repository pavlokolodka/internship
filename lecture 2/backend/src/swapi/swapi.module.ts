import { Module } from '@nestjs/common';
import { HttpService } from 'src/http/http.service';
import { SwapiController } from './swapi.controller';
import { SwapiService } from './swapi.service';

@Module({
  imports: [HttpService],
  controllers: [SwapiController],
  providers: [SwapiService, HttpService]
})
export class SwapiModule {}
