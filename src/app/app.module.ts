import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import {AppRouteModule} from './app-route.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopComponent } from './shop/shop.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PagenotfoundComponent,
    ShopComponent,
    DetailProductComponent,
    ContactComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NgwWowModule.forRoot(),
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
