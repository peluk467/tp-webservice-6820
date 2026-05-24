import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para la barra de búsqueda
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  
  terminoBusqueda: string = '';
  listaLibros: any[] = [];
  cargando: boolean = false;
  busquedaRealizada: boolean = false;

  constructor(private librosService: LibrosService) {}

  realizarBusqueda() {
    if (!this.terminoBusqueda.trim()) return; // Si está vacío, no hace nada

    this.cargando = true;
    this.busquedaRealizada = true;
    this.listaLibros = []; // Limpiamos la lista anterior

    this.librosService.buscarLibros(this.terminoBusqueda).subscribe({
      next: (datos: any) => {
        console.log('Libros encontrados:', datos);
        // La API de Open Library devuelve los libros adentro de un arreglo llamado "docs"
        this.listaLibros = datos.docs;
        this.cargando = false;
      },
      error: (err: any) => {
        console.error('Error al buscar libros', err);
        this.cargando = false;
      }
    });
  }
}