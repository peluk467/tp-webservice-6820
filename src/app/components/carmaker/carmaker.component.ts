import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarmakerService } from '../../services/carmaker.service';

@Component({
  selector: 'app-carmaker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carmaker.component.html',
  styleUrl: './carmaker.component.css'
})
export class CarmakerComponent implements OnInit {
  
  marcas: any[] = [];
  modelos: any[] = [];
  marcaSeleccionada: string = '';
  cargandoModelos: boolean = false;

  constructor(private carmakerService: CarmakerService) {}

  ngOnInit() {
    this.carmakerService.getMarcas().subscribe({
      next: (datos: any) => {
        console.log('Marcas de la API:', datos);
        // Guardamos la lista de marcas
        this.marcas = datos; 
      },
      error: (err: any) => console.error('Error al cargar marcas', err)
    });
  }

  seleccionarMarca(marca: any) {
    // Imprimimos la marca exacta a la que le hiciste clic para ver qué tiene adentro
    console.log("Hiciste clic en la marca:", marca);

    this.marcaSeleccionada = marca.name ? marca.name : marca;
    
    // Aquí está el truco: Si no se llama "id", probamos con "makeId" o "make_id"
    const idMarca = marca.id || marca.makeId || marca.make_id; 
    
    console.log("El ID que le vamos a mandar al Chef es:", idMarca);

    this.cargandoModelos = true;
    this.modelos = []; 

    // Llamamos al Chef
    this.carmakerService.getModelos(idMarca).subscribe({
      next: (datos: any) => {
        console.log(`Modelos recibidos del ID ${idMarca}:`, datos);
        this.modelos = datos;
        this.cargandoModelos = false;
      },
      error: (err: any) => {
        console.error('Error rojo al cargar modelos:', err);
        this.cargandoModelos = false; // Esto asegura que la ruedita deje de girar si hay error
      }
    });
  }
}