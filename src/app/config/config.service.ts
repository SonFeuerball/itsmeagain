import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

export interface Cat {
  id: string,
  url: string,
  width: number,
  height: number,
  breeds: [],
  favourite: {}
}

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) {

  }

  _getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('https://api.thecatapi.com/v1/images/search?limit=10')
      .pipe(
        map((cats: Cat[]) => cats.map(cat => cat))
      )
  }
}
