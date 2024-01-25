import { Kit } from "./Kit";

export class CartItem{
  constructor(public kit:Kit){}
  quantity: number = 1;
  price: number = this.kit.price;
}
