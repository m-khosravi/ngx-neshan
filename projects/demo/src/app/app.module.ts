import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxNeshanModule, NESHAN_API_KEY } from 'projects/ngx-neshan/src/public-api';
import { HttpClientModule } from '@angular/common/http';
import { api_key } from 'api_key.secret';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxNeshanModule,
  ],
  providers: [
    { provide: NESHAN_API_KEY, useValue: api_key }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
