import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CarmakerService {
  
  // Guardamos la llave y el host en una "caja" lista para usar
  private misHeaders = new HttpHeaders({
    'x-rapidapi-key': '5368067644msh380c5cf851f0ec2p1e0c4fjsn1cfbb03467aa',
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