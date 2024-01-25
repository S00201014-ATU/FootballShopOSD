import { LoginPageComponent } from './../login-page/login-page.component';
import { KitService } from './../../../services/kit.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kit } from '../../../shared/models/Kit';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../partials/header/header.component';
import { SearchComponent } from '../../partials/search/search.component';
import { KitPageComponent } from '../kit-page/kit-page.component';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { TitleComponent } from '../../partials/title/title.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, LoginPageComponent, SearchComponent, KitPageComponent, CartPageComponent, TitleComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  kit:Kit[] = [];
  constructor(private KitService:KitService, activatedRoute: ActivatedRoute) {
   let kitsObservable:Observable<Kit[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      kitsObservable = this.KitService.getAllKitsBySearchTerm(params.searchTerm)
      else
      kitsObservable = KitService.getAll();

      kitsObservable.subscribe((serverKits) =>{
        this.kit = serverKits;
      })
    })

   }

  ngOnInit(): void {

  }
}
