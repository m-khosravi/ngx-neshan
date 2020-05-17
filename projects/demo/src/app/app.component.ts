import { Component } from '@angular/core';
import { NsLocation } from 'projects/ngx-neshan/src/lib/models/ns-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  location: NsLocation = new NsLocation();

  constructor() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        var loc = new NsLocation();

        loc.latitude = res.coords.latitude;
        loc.longitude = res.coords.longitude;
        this.location = loc;
      }, err => {
        console.log(err);
      });
    }
  }
}
