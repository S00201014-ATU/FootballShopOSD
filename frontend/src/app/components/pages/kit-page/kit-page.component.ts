import { CartService } from './../../../services/cart.service';
import { KitService } from './../../../services/kit.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kit } from '../../../shared/models/Kit';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../partials/header/header.component';
import { SearchComponent } from '../../partials/search/search.component';
import { HomeComponent } from '../home/home.component';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { TitleComponent } from '../../partials/title/title.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { LoginPageComponent } from '../login-page/login-page.component';
@Component({
  selector: 'app-kit-page',
  standalone: true,
  imports: [CommonModule, LoginPageComponent, RouterModule, HeaderComponent, SearchComponent, HomeComponent, CartPageComponent, TitleComponent, NotFoundComponent],
  templateUrl: './kit-page.component.html',
  styleUrl: './kit-page.component.css'
})
export class KitPageComponent implements OnInit {
kit!: Kit;
  constructor(activatedRoute: ActivatedRoute, kitService:KitService, private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
     kitService.getKitById(params.id).subscribe(serverKits =>{
    this.kit = serverKits})
    })
   }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart(this.kit);
    this.router.navigateByUrl('/cart-page');
  }
}
