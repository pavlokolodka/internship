import discount from './discount';
import { ComputerFactory } from './goods/computer/computer.factory';
import { GoodsFactory } from './goods/goods.factory';
import { LaptopFactory } from './goods/laptop/laptop.factory';
import { TelephoneFactory } from './goods/telephone/telephone.factory';


export class User {
  private balance = 50000;
  private products: Array<GoodsFactory> = [new LaptopFactory(), new TelephoneFactory(), new ComputerFactory()];

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