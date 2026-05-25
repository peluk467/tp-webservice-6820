import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  
  listaPeliculas: any[] = []; 
  cargando: boolean = false;

  constructor(
    private peliculaService: PeliculaService,
    private cdr: ChangeDetectorRef
  ) {}

  obtenerPeliculas() {
    this.cargando = true;

    this.peliculaService.obtenerPeliculas().subscribe({
      next: (datos: any) => {
        this.listaPeliculas = datos; 
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error("Hubo un error al llamar a la API:", error);
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
}