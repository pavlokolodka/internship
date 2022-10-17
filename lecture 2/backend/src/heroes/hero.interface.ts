import { IVehicle } from "src/vehicles/interface.vehicle";

export interface IHero {
  name: string,
  height: string,
  mass: string,
  hair_colo: string,
  skin_color: string,
  eye_color: string,
  birth_yea: string,
  gender: string,
  homeworld: string,
  films: Array<string>,
  species: Array<string>,
  vehicles: Array<IVehicle>,
  starships: Array<string>,
  created: string,
  edited: string,
  url: string
}