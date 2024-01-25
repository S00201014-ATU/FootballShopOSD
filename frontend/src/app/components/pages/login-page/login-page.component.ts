import { KitService } from './../../../services/kit.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kit } from '../../../shared/models/Kit';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../partials/header/header.component';
import { SearchComponent } from '../../partials/search/search.component';
import { KitPageComponent } from '../kit-page/kit-page.component';
import { HomeComponent } from '../home/home.component';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from '../../partials/title/title.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from '../../partials/input-container/input-container.component';
import { InputValidationComponent } from '../../partials/input-validation/input-validation.component';
import { TextInputComponent } from '../../partials/text-input/text-input.component';
import { DefaultButtonComponent } from '../../partials/default-button/default-button.component';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, DefaultButtonComponent, InputValidationComponent, TextInputComponent, InputContainerComponent, RouterModule, ReactiveFormsModule, HeaderComponent, SearchComponent, CartPageComponent, KitPageComponent, HomeComponent, TitleComponent, NotFoundComponent ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{

  loginForm!: FormGroup;

  isSubmitted = false;

  returnUrl = '';

  constructor(private formBuilder: FormBuilder
    , private userService:UserService,
     private activatedRoute:ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;




    this.userService.login({email:this.fc.email.value,
      password: this.fc.password.value}).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }


}
