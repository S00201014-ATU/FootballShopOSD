import { CartService } from './../../../services/cart.service';
import { CheckoutPageComponent } from './../checkout-page/checkout-page.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Order } from '../../../shared/models/Order';
import { OrderService } from '../../../services/order.service';
import { NgxStripeModule, StripeCardComponent, StripeFactoryService, StripeInstance, StripeService } from 'ngx-stripe';
import { Subscription, switchMap } from 'rxjs';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CartPageComponent } from '../cart-page/cart-page.component';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule, RouterModule, CheckoutPageComponent, CartPageComponent, NgxStripeModule, MatInputModule, MatButtonModule, FormsModule ],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent implements OnInit, OnDestroy{
  router:Router = new Router();
  order:Order = new Order();

  public stripe!: StripeInstance;
  public stripeAmount!: number;
  public stripePublicKey = 'key';

  private subscriptions: Subscription;
  constructor(orderService: OrderService, private http:HttpClient, private stripeFactory: StripeFactoryService,) {
    this.subscriptions = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.stripe = this.stripeFactory.create(this.stripePublicKey);
    this.stripeAmount = this.order.totalPrice;
  }

  checkout(){
    const host = 'http://localhost:4200';
    const checkout: Subscription = this.http.post(host + '/create-checkout-session', {data: {amount: this.stripeAmount * 100}}, {observe: 'response'})
    .pipe(
        switchMap((response: HttpResponse<Object>) => {
          const session: IStripeSession = response.body as IStripeSession;
          return this.stripe.redirectToCheckout({ sessionId: session.id });
        })
    )
    .subscribe(result => {
      if (result.error) {
        console.log(result.error)
      }
    });
this.subscriptions.add(checkout);
}
}

interface IStripeSession {
id: string;
}
