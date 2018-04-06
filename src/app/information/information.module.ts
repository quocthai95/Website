import { NgModule } from '@angular/core';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        AboutComponent,
        PagenotfoundComponent
    ],
    imports: [
        CommonModule
    ]
})

export class InformationModule {}
