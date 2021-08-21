import { LayoutSendoRoutingModule } from './layout-sendo.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSendoComponent } from './layout-sendo.component';
import { PagesComponent } from './pages/pages.component';
import { ApiSendoService } from './core/service/api-sendo.service';



@NgModule({
  declarations: [
    LayoutSendoComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    LayoutSendoRoutingModule
  ],
  providers:[
    ApiSendoService
  ]
})
export class LayoutSendoModule { }
