import { IGoods } from "./goods.interface";


export abstract class Goods {
  abstract price: number;
  abstract model: string;

  abstract factoryMethod(): IGoods;

  public getGoodsPrice(): number {
    const product = this.factoryMethod();
    return product.getPrice();
  }

  public getGoodsModel(): string {
    const product = this.factoryMethod();
    return product.getModel();
  }
}