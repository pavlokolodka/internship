import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { IHero } from 'src/heroes/hero.interface';
import { IVehicle } from 'src/vehicles/interface.vehicle';

@Injectable()
export class HttpService {
  async getHero(name: string): Promise<IHero> {
    const check = new RegExp(name);
    let URI = "http://swapi.dev/api/people/";

    while (URI !== null) {
      try {
        const res = await fetch(URI);
        const data = await res.json();

        for (let i = 0; i < data.results.length; i++) {
          if (check.test(data.results[i].name)) return data.results[i];
        }
  
        URI = data.next; 
      } catch (e) {
        throw new HttpException('Server error', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    throw new HttpException('No hero with a such name', HttpStatus.NOT_FOUND);
  }

   async getCars(cars: Array<IVehicle>): Promise<[] | Array<IVehicle>> {
    const vehicles = [];

    if (cars.length === 0) return vehicles;

    try {
      for (let index = 0; index < cars.length; index++) {
        let res = await fetch(cars[index]);
        let carInfo = await res.json();
        vehicles.push(carInfo);
      }
    } catch (e) {
      throw new HttpException('Server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
    return vehicles;
  }
}
