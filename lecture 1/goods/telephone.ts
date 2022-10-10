import { IGoods } from "./goods.interface";
import { Goods } from "./goods";


export class Telephone extends Goods implements IGoods {
  public price = 5000;
  public model = "Apple";

  public factoryMethod(): IGoods {
    return new Telephone();
  }
  getPrice(): number {
    return this.price;
  }

  getModel(): string {
    return this.model;
  }
}