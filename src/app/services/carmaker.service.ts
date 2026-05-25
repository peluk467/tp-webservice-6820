import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CarmakerService {
  
  private misHeaders = new HttpHeaders({
    'x-rapidapi-key': '87c272fd9fmshbd317714b3ef455p1f8d2ejsn466d5dfc1fea',
    'x-rapidapi-host': 'car-specs.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getMarcas() {
    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes', { headers: this.misHeaders });
  }

  getModelos(idMarca: number) {
    return this.http.get(`https://car-specs.p.rapidapi.com/v2/cars/makes/${idMarca}/models`, { headers: this.misHeaders });
  }
}