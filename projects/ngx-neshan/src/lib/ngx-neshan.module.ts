import { NgModule } from '@angular/core';
import { NgxNeshanComponent } from './ngx-neshan.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [NgxNeshanComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [NgxNeshanComponent]
})
export class NgxNeshanModule { }
