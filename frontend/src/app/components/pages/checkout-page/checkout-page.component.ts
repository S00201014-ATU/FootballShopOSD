import { appConfig } from './../../../app.config';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { TitleComponent } from '../../partials/title/title.component';
import { InputValidationComponent } from '../../partials/input-validation/input-validation.component';
import { InputContainerComponent } from '../../partials/input-container/input-container.component';
import { TextInputComponent } from '../../partials/text-input/text-input.component';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { MapComponent } from '../../partials/map/map.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, MapComponent, TitleComponent, OrderItemsListComponent, ReactiveFormsModule, InputValidationComponent, InputContainerComponent, TextInputComponent ],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit {

  order:Order = new Order();
  checkoutForm!: FormGroup;
  constructor(cartService:CartService, private formBuilder: FormBuilder, private userService: UserService, private toastrService:ToastrService) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {

    let{name, address} = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name:[name, Validators.required],
      address:[address, Validators.required]
    });
  }

  get fc(){
    return this.checkoutForm.controls;
  }

  createOrder(){
    if (this.checkoutForm.invalid){
      this.toastrService.warning('Please fill the inputs', 'Invalid inputs');
      return;
    }

    this.toastrService.success("Order will be with you within 5 working days!", "Succesful");


  }
}
