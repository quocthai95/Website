import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CupComponent } from './shop/cup/cup.component';
import { BowlComponent } from './shop/bowl/bowl.component';
import { PlateComponent } from './shop/plate/plate.component';

@NgModule({
    declarations: [
        CupComponent,
        BowlComponent,
        PlateComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ProductModule {}
