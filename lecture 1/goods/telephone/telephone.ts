import { IGoods } from "../goods.interface";


export class TelephoneApple implements IGoods {
  public price = 5000;
  public model = "Apple";

  getPrice(): number {
    return this.price;
  }

  getModel(): string {
    return this.model;
  }
}