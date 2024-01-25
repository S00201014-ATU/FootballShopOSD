import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../../shared/models/Order';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CartItem } from '../../../shared/models/CartItem';
import { CartPageComponent } from '../../pages/cart-page/cart-page.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'order-items-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CartPageComponent],
  templateUrl: './order-items-list.component.html',
  styleUrl: './order-items-list.component.css'
})
export class OrderItemsListComponent implements OnInit {

  @Input()
  order!: Order;

  constructor(cartService:CartService) {}

  ngOnInit(): void {

  }


}
