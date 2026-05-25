import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }
  
  buscarLibros(textoBusqueda: string): Observable<any> {

    const busquedaLimpia = textoBusqueda.split(' ').join('+');
    
    const url = `https://openlibrary.org/search.json?q=${busquedaLimpia}&limit=15`;
    
    return this.http.get(url);
  }
}