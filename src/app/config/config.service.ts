import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap, delay } from 'rxjs/operators';

export interface Cat {
  id: string,
  url: string,
  width: number,
  height: number,
  breeds: Breed[],
  favourite: {}
}

export interface Breed {
  weight: Weight
  id: string
  name: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  life_span: string
  wikipedia_url: string
}

export interface Weight {
  imperial: string
  metric: string
}

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) {

  }

  //delay mocks slow api response -> shows loading state
  _getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('https://api.thecatapi.com/v1/images/search?limit=10')
      .pipe(delay(1500),
        map((cats: Cat[]) => cats.map(cat => cat))
      )
  }
}
