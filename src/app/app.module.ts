import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import {AppRouteModule} from './app-route.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InformationModule } from './information/information.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgwWowModule.forRoot(),
    CoreModule,
    InformationModule,
    ProductModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
