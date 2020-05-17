import { NgModule } from '@angular/core';
import { NgxNeshanComponent } from './ngx-neshan.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NeshanStaticComponent } from './component/neshan-static/neshan-static.component';



@NgModule({
  declarations: [NgxNeshanComponent, NeshanStaticComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [NgxNeshanComponent,NeshanStaticComponent]
})
export class NgxNeshanModule { }
