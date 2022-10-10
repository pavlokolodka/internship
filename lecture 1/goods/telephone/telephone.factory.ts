import { IGoods } from "../goods.interface";
import { GoodsFactory } from "../goods.factory";
import { TelephoneApple } from "./telephone";


export class TelephoneFactory extends GoodsFactory {
  public factoryMethod(): IGoods {
    return new TelephoneApple();
  }
 }