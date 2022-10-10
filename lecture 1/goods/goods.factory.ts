import { IGoods } from "./goods.interface";


export abstract class GoodsFactory {
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