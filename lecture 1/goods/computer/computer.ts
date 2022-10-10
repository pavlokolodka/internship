import { IGoods } from "../goods.interface";
import { GoodsFactory } from "../goods.factory";


export class ComputerAcer implements IGoods {
  public price = 15000;
  public model = "Acer";

  getPrice(): number {
    return this.price;
  }

  getModel(): string {
    return this.model;
  }
}