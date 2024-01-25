import { routes } from './app.routes';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/partials/search/search.component';
import { KitPageComponent } from './components/pages/kit-page/kit-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { provideToastr } from 'ngx-toastr';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, ToastrModule,  CheckoutPageComponent, OrderItemsListComponent, RouterOutlet, ReactiveFormsModule, HeaderComponent, HomeComponent, SearchComponent, KitPageComponent, LoginPageComponent, FormsModule]
})
export class AppComponent {
  title = 'frontend';
}
