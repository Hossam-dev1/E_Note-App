import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private _http: HttpClient) {
  }

  getCities(): Observable<any> {
    return this._http.get('http://138.3.252.27/bay_backend/public/api/v1/content/cities')
  }
}
