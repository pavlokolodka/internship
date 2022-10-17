import { Controller, Get, Query } from '@nestjs/common';
import { IHero } from 'src/heroes/hero.interface';
import { SwapiService } from './swapi.service';

@Controller('swapi')
export class SwapiController {
  constructor(private swapiService: SwapiService) {}

  @Get()
  async findHero(@Query('name') reqName: string): Promise<IHero> {
    const hero = await this.swapiService.findHero(reqName);
    return hero;
  } 
}
