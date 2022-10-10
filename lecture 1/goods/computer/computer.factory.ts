import { IGoods } from "../goods.interface";
import { GoodsFactory } from "../goods.factory";
import { ComputerAcer } from "./computer";


export class ComputerFactory extends GoodsFactory {
  public factoryMethod(): IGoods {
    return new ComputerAcer();
  }
}