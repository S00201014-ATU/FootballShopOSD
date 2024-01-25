import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Order } from '../../../shared/models/Order';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent implements OnInit{

  order:Order = new Order();
  constructor(orderService: OrderService) {

  }

  ngOnInit(): void {

  }

}
