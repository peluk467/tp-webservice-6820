import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  // Busca libros por título, autor o tema
  buscarLibros(textoBusqueda: string): Observable<any> {
    // Reemplazamos los espacios por '+' para que la URL no se rompa (ej: "harry potter" -> "harry+potter")
    const busquedaLimpia = textoBusqueda.split(' ').join('+');
    
    // Llamamos a la API pública de Open Library (le pedimos máximo 12 resultados)
    const url = `https://openlibrary.org/search.json?q=${busquedaLimpia}&limit=12`;
    
    return this.http.get(url);
  }
}