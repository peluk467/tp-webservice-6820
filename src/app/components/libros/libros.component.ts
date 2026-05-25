import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
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
    if (!this.terminoBusqueda.trim()) return; 

    this.cargando = true;
    this.busquedaRealizada = true;
    this.listaLibros = []; 
    this.librosService.buscarLibros(this.terminoBusqueda).subscribe({
      next: (datos: any) => {
        console.log('Libros encontrados:', datos);
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