import { Component } from '@angular/core';
import { NsLocation } from 'projects/ngx-neshan/src/lib/models/ns-location';
import { NeshanService } from 'projects/ngx-neshan/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  location: NsLocation = new NsLocation();

  constructor(private neshan: NeshanService) {
    this.directionSample();
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

  directionSample() {
    let origin = new NsLocation(36.697945, 52.652016);
    let dest = new NsLocation(36.561138, 52.679366);
    let waypoints = new Array<NsLocation>();
    waypoints.push(new NsLocation(36.5684832, 52.6768252));
    this.neshan.direction(origin, dest, waypoints).subscribe(res => {
      console.log(res);
    })
  }
}
