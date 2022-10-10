import { IGoods } from "../goods.interface";



export class LaptopMac implements IGoods {
  public price = 10000;
  public model = "MacBook";
  
  getPrice(): number {
    return this.price;
  }

  getModel(): string {
    return this.model;
  }
}