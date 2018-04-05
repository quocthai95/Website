import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        ContactComponent,
        AboutComponent,
        PagenotfoundComponent
    ],
    imports: [
        CommonModule
    ]
})

export class InformationModule {}
