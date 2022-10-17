import { HttpException, Inject, Injectable } from '@nestjs/common';
import { IHero } from 'src/heroes/hero.interface';
import { IHttpService } from 'src/http/http.interface';
import { HttpService } from 'src/http/http.service';

@Injectable()
export class SwapiService {
  constructor(@Inject(HttpService) private httpService: IHttpService) {}

  async findHero(name: string): Promise<IHero> {
    try {
      const hero = await this.httpService.getHero(name);

      const vehicles = await this.httpService.getCars(hero.vehicles);

      return {
        ...hero,
        vehicles: [
          ...vehicles
        ]
      };
    } catch (error) {
      throw error;
    }
  }
}
