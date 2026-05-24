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
  cargando: boolean = false;

  constructor(private carmakerService: CarmakerService) {}

  ngOnInit() {
    // Apenas entramos, pedimos la lista de marcas
    this.carmakerService.getMarcas().subscribe(datos => {
      this.marcas = datos;
    });
  }

  buscarModelos(marca: any) {
    this.marcaSeleccionada = marca.name;
    this.cargando = true;
    this.modelos = []; 

    this.carmakerService.getModelos(marca.id).subscribe(datos => {
      this.modelos = datos;
      this.cargando = false; 
    });
  }
}