import { IGoods } from "./goods.interface";
import { Goods } from "./goods";


export class Laptop extends Goods implements IGoods {
  public price = 10000;
  public model = "MacBook";

  public factoryMethod(): IGoods {
    return new Laptop();
  }

  getPrice(): number {
    return this.price;
  }

  getModel(): string {
    return this.model;
  }
}