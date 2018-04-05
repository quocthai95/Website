import { NgModule } from '@angular/core';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { DetailProductComponent } from './shop/detail-product/detail-product.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ShopComponent,
        CartComponent,
        DetailProductComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ProductModule {}
