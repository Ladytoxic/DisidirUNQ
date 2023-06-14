import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL_DATA = "./assets/perfiles.json"
  constructor(private http: HttpClient) { }

  obtenerDatosPerfiles(): Observable<any> {
    return this.http.get(this.URL_DATA);
  }
}
