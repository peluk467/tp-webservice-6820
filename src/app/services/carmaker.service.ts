import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarmakerService {
  
  private apiHost = 'car-specs.p.rapidapi.com';
  private apiKey = '5368067644msh380c5cf851f0ec2p1e0c4fjsn1cfbb03467aa';

  constructor(private http: HttpClient) { }

  getHeaders() {
    return new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.apiHost
    });
  }

  // ¡Este te quedó perfecto!
  getMarcas(): Observable<any> {
    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes', { headers: this.getHeaders() });
  }

  // Corregimos la ruta: Fíjate cómo metemos la variable idMarca justo en el medio
  getModelos(idMarca: number): Observable<any> {
    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes/' + idMarca + '/models', { headers: this.getHeaders() });
  }
}