import {Telephone} from './goods/telephone';
import {Laptop} from './goods/laptop';
import {Computer} from './goods/computer';
import discount from './discount';
import { Goods } from './goods/goods';


export class User {
  private balance = 50000;
  private products: Array<Goods> = [new Laptop(), new Telephone(), new Computer()];

  constructor(private name: string) {
    this.name = name;
  }

  buy(): void {
    while (this.balance > 0) {
      const product = this.products[Math.floor(Math.random() * 3)];
      const currentPrice = discount(product.getGoodsPrice());
      console.log(`${this.name}'s current balance: ${this.balance}`);

      if (this.balance - currentPrice >= 0) {
        this.balance -= currentPrice;
        console.log(`New purchase: ${product.getGoodsModel()} price ${currentPrice}`);
      } else {
        console.log("Balance <= 0")
        return;
      }
    }
  }
}