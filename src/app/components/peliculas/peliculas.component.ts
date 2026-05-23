import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para iterar listas en el HTML
import { PeliculaService } from '../../services/pelicula.service'; // Importamos a nuestro Chef

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {
  
  // Aquí guardaremos las películas que nos traiga el servicio
  listaPeliculas: any[] = []; 

  // Inyectamos el servicio en el constructor (es como darle un walkie-talkie al mozo)
  constructor(private peliculaService: PeliculaService) {}

  // ngOnInit es un evento que se ejecuta de forma automática cuando el usuario entra a esta página
  ngOnInit(): void {
    // Llamamos al método del servicio
    this.peliculaService.obtenerPeliculas().subscribe({
      next: (datos) => {
        console.log("¡Llegaron las películas!", datos); // Muestra los datos en la consola oculta (F12)
        this.listaPeliculas = datos; // Guardamos las películas en nuestra variable
      },
      error: (error) => {
        console.error("Hubo un error al llamar a la API:", error);
      }
    });
  }
}