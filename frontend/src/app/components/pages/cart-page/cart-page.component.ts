import { OrderItemsListComponent } from './../../partials/order-items-list/order-items-list.component';
import { KitService } from './../../../services/kit.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kit } from '../../../shared/models/Kit';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../partials/header/header.component';
import { SearchComponent } from '../../partials/search/search.component';
import { KitPageComponent } from '../kit-page/kit-page.component';
import { HomeComponent } from '../home/home.component';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from '../../partials/title/title.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderComponent, SearchComponent, OrderItemsListComponent, KitPageComponent, HomeComponent, LoginPageComponent, TitleComponent, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {

  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {

  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.kit.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.kit.id, quantity);
  }


}
