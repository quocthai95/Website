import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './information/about/about.component';
import { PagenotfoundComponent } from './information/pagenotfound/pagenotfound.component';
import { ShopComponent } from './product/shop/shop.component';
import { DetailProductComponent } from './product/shop/detail-product/detail-product.component';
import { CartComponent } from './product/cart/cart.component';
import { ContactComponent } from './information/contact/contact.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './core/home/home.component';


const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'cart', component: CartComponent},
    {path: 'shop', component: ShopComponent},
    { path: 'detailProduct', component: DetailProductComponent },
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRouteModule {}
