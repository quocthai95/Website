import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRouteModule } from '../app-route.module';
import { InItService } from '../shared/init.service';

@NgModule({
  imports: [
    CommonModule,
    AppRouteModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  exports: [
    AppRouteModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  providers: [InItService]
})
export class CoreModule { }
