import { IHero } from "src/heroes/hero.interface";
import { IVehicle } from "src/vehicles/interface.vehicle";

export interface IHttpService {
  getHero(name: string): Promise<IHero>;
  getCars(cars: Array<IVehicle>): Promise<[] | Array<IVehicle>>;
}