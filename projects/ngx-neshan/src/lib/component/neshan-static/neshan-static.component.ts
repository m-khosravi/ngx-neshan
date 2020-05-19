import { Component, OnInit, Input, Inject, Optional, OnChanges } from '@angular/core';
import { NsLocation } from '../../models/ns-location';
import { NESHAN_API_KEY, NESHAN_BASE_URL } from '../../ngx-neshan.service';

@Component({
  selector: 'neshan-static',
  templateUrl: './neshan-static.component.html',
  styleUrls: ['./neshan-static.component.css']
})
export class NeshanStaticComponent implements OnInit, OnChanges {

  imgUrl: string;

  @Input() location: NsLocation;
  @Input() type: 'dreamy' | 'dreamy-gold' | 'standard-day' | 'standard-night' | 'neshan' | 'osm-bright' = 'neshan'
  @Input() marker: 'red' | 'green' | 'blue' | 'violet' | 'none' = 'red'
  @Input() zoom: number = 13;
  @Input() width: number = 700;
  @Input() height: number = 300;

  private baseUrl: string;
  private apiKey: string;

  constructor(@Inject(NESHAN_API_KEY) apiKey: string, @Optional() @Inject(NESHAN_BASE_URL) baseUrl?: string) {
    this.baseUrl = baseUrl ? baseUrl : "https://api.neshan.org";

    if (apiKey === undefined || apiKey === null)
      throw new Error("The parameter 'NESHAN_API_KEY' must be define.");
    this.apiKey = apiKey;
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

    this.generateStaticMap();
  }

  ngOnInit(): void {
    this.generateStaticMap();
  }

  generateStaticMap() {
    this.imgUrl = this.baseUrl
      + `/v2/static?key=${this.apiKey}&type=${this.type}`
      + `&zoom=${this.zoom}&center=${this.location.latitude},${this.location.longitude}`
      + `&width=${this.width}&height=${this.height}&marker=${this.marker}`;
  }

}
