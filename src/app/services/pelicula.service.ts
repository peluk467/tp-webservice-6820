import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/'; 

  // 2. Inyectamos la herramienta HttpClient (el "teléfono" para llamar a internet)
  constructor(private http: HttpClient) { }

  // 3. Método para pedir las películas
  obtenerPeliculas(): Observable<any> {
    
    // Armamos la carta de presentación con tu contraseña secreta
    const headers = new HttpHeaders({
      'x-rapidapi-key': '5368067644msh380c5cf851f0ec2p1e0c4fjsn1cfbb03467aa',
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    });

    // Hacemos la llamada HTTP de tipo GET 
    return this.http.get(this.apiUrl, { headers });
  }
}