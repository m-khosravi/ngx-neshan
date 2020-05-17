import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NsSearchResult } from './models/ns-search-result';
import { NgxNeshanService } from './ngx-neshan.service';
import { NsLocation } from './models/ns-location';

@Component({
  selector: 'neshan-sample',
  template: `
    <p>
      ngx-neshan works!
    </p>
    <div *ngIf="item">
      <p>تعداد: {{item.count}}</p>
      <ul>
        <li *ngFor="let it of item.items">
          <p>{{it.title}}</p>
          <p>{{it.address}}</p>
          <p>lat: {{it.location.latitude}}, long: {{it.location.longitude}}</p>
        </li>
      </ul>
    </div>
  `,
  styles: [
  ]
})
export class NgxNeshanComponent implements OnInit {

  @Input() searchTerm: string;
  @Input() searchCenter: NsLocation;

  item: NsSearchResult;

  @Output() SearchComplete: EventEmitter<NsSearchResult> = new EventEmitter<NsSearchResult>();

  constructor(private neshan: NgxNeshanService) { }


  ngOnInit(): void {
    let loc = new NsLocation();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        loc.latitude = res.coords.latitude;
        loc.longitude = res.coords.longitude;

        this.neshan.search(this.searchTerm, loc)
          .subscribe(res => {
            this.item = res;
            console.log(this.item);
            this.SearchComplete.emit(this.item);
          })
      });
    }
    else {
      this.neshan.search(this.searchTerm, loc)
        .subscribe(res => {
          this.item = res;
          console.log(this.item);
          this.SearchComplete.emit(this.item);
        })
    }
  }

}
