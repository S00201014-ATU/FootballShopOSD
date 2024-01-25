import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { KitPageComponent } from './components/pages/kit-page/kit-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ToastrModule } from 'ngx-toastr';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'search/:searchTerm', component: HomeComponent
  },
  {
    path: 'tag/:tag', component: HomeComponent
  },
  {
    path: 'kits/:id', component: KitPageComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'cart-page', component:CartPageComponent
  },
  {
    path: 'checkout', component:CheckoutPageComponent
  },
  {
    path: 'payment', component: PaymentPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ToastrModule.forRoot({timeOut:3000, positionClass: 'toast-bottom-right', newestOnTop: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
