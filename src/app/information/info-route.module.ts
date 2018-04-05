import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../core/home/home.component';

const infoRoutes: Routes = [
    {path: 'home', component: HomeComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(infoRoutes)
    ],
    exports: [RouterModule]
})
export class InfoRouteModule {}
