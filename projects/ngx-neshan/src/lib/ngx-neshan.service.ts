import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NsLocation } from './models/ns-location';
import { Observable } from 'rxjs';
import { NsSearchResult } from './models/ns-search-result';
import { NsReverseResult } from './models/ns-reverse-result';

export const NESHAN_BASE_URL = new InjectionToken<string>('NESHAN_BASE_URL');
export const NESHAN_API_KEY = new InjectionToken<string>('NESHAN_API_KEY');
/**
 * API نقشه نشان
 *زیرساخت توسعه‌ی نشان با ارائه‌ی سرویس‌های مبتنی بر نقشه، با کیفیتی متمایز سعی در کمک به جامعه‌ی توسعه‌دهندگان و کسب و کارهای ایرانی دارد که در زمینه‌ی اپلیکیشن‌ها و سرویس‌های مکان‌محور فعالیت می‌کنند. *
 * @export
 * @class NgxNeshanService
 */
@Injectable({
  providedIn: 'root'
})

export class NgxNeshanService {

  private http: HttpClient;
  private baseUrl: string;
  private apiKey: string;

  constructor(@Inject(HttpClient) http: HttpClient, @Inject(NESHAN_API_KEY) apiKey: string, @Optional() @Inject(NESHAN_BASE_URL) baseUrl?: string) {
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : "https://api.neshan.org";

    if (apiKey === undefined || apiKey === null)
      throw new Error("The parameter 'NESHAN_API_KEY' must be define.");
    this.apiKey = apiKey;
  }
/**
 *سرویس جستجوی مکان محور
 *
 * @param {string} searchTerm عبارت جستجو
 * @param {NsLocation} location مختصات مربوط به مرکز جستجو
 * @returns {Observable<NsSearchResult>}
 * @memberof NgxNeshanService
 */
search(searchTerm: string, location: NsLocation): Observable<NsSearchResult> {

    if (searchTerm === undefined || searchTerm === null)
      throw new Error("The parameter 'searchTerm' must be define.");
    if (location === undefined || location === null)
      throw new Error("The parameter 'location' must be define.");

    let url = this.baseUrl + `/v1/search?term=${searchTerm}&lat=${location.latitude}&lng=${location.longitude}`

    return this.http.get<NsSearchResult>(url, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Api-Key": this.apiKey,
      })
    });
  }
/**
 *سرویس تبدیل مختصات جغرافیایی به آدرس
 *
 * @param {NsLocation} location مختصات مورد نظر
 * @returns {Observable<NsReverseResult>}
 * @memberof NgxNeshanService
 */
reverseGeocoding(location: NsLocation): Observable<NsReverseResult>{
    if (location === undefined || location === null)
      throw new Error("The parameter 'location' must be define.");

    let url = this.baseUrl + `/v2/reverse?lat=${location.latitude}&lng=${location.longitude}`

    return this.http.get<NsReverseResult>(url, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Api-Key": this.apiKey,
      })
    });
  }
}
