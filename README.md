# NGX NESHAN
An Angular 6+ library to access [Neshan Maps Platform](https://developers.neshan.org/) 

[Read Documentation](https://m-khosravi.github.io/ngx-neshan/documentation/overview.html)

Getting Start
----
Signup and get your API ACCESS KEY at [Neshan Developers Panel](https://developers.neshan.org/panel) 

Installation
----
`npm i ngx-neshan --save`

Usage
-----
Import `NgxNeshanModule, NESHAN_API_KEY` into your app's modules:

``` typescript
import { NgxNeshanModule, NESHAN_API_KEY } from 'ngx-neshan';

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

