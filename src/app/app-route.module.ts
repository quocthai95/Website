import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './information/about/about.component';
import { PagenotfoundComponent } from './information/pagenotfound/pagenotfound.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './core/home/home.component';
import { CupComponent } from './product/shop/cup/cup.component';
import { BowlComponent } from './product/shop/bowl/bowl.component';
import { PlateComponent } from './product/shop/plate/plate.component';


const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'shop/cup', component: CupComponent},
    {path: 'shop/bowl', component: BowlComponent},
    {path: 'shop/plate', component: PlateComponent},
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRouteModule {}
