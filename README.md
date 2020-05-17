# NGX NESHAN
An Angular 6+ library to access [Neshan Maps Platform](https://developers.neshan.org/) 

Getting Start
----
Signup and get your API ACCESS KEY at [Neshan Developers Panel](https://developers.neshan.org/panel) 

Usage
-----

Import `NgxNeshanModule, NESHAN_API_KEY` into your app's modules:

``` typescript
import { NgxNeshanModule, NESHAN_API_KEY } from 'projects/ngx-neshan/src/public-api';

@NgModule({
  imports: [
    ...
    NgxNeshanModule,
    ...
  ],
  providers: [
    { provide: NESHAN_API_KEY, useValue: 'NESHAN_API_KEY' }
  ],
})
```

