import { IGoods } from "./goods.interface";
import { Goods } from "./goods";


export class Computer extends Goods implements IGoods {
  public price = 15000;
  public model = "Acer";

  public factoryMethod(): IGoods {
    return new Computer();
  }

  getPrice(): number {
    return this.price;
  }

  getModel(): string {
    return this.model;
  }
}