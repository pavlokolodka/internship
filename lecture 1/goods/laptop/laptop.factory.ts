import { IGoods } from "../goods.interface";
import { GoodsFactory } from "../goods.factory";
import { LaptopMac } from "./laptop";


export class LaptopFactory extends GoodsFactory {
   public factoryMethod(): IGoods {
    return new LaptopMac();
  }
}