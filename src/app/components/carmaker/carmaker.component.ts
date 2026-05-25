import { Component, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { CarmakerService } from '../../services/carmaker.service';

@Component({
  selector: 'app-carmaker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carmaker.component.html',
  styleUrl: './carmaker.component.css'
})
export class CarmakerComponent {
  
  marcas: any[] = [];
  modelos: any[] = [];
  marcaSeleccionada: string = '';
  
 
  cargandoMarcas: boolean = false;
  cargandoModelos: boolean = false;

  constructor(
    private carmakerService: CarmakerService, 
    private cdr: ChangeDetectorRef 
  ) {}

 
  obtenerMarcas() {
    this.cargandoMarcas = true; 

    this.carmakerService.getMarcas().subscribe({
      next: (result: any) => {
        this.marcas = result;
        this.cargandoMarcas = false;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.log(error);
        this.cargandoMarcas = false;
        this.cdr.detectChanges();
      }
    });
  }

  
  buscarModelos(marca: any) {
    this.marcaSeleccionada = marca.name;
    this.cargandoModelos = true; 
    this.modelos = []; 
    this.cdr.detectChanges(); 

    this.carmakerService.getModelos(marca.id).subscribe({
      next: (result: any) => {
        this.modelos = result;
        this.cargandoModelos = false;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.log(error);
        this.cargandoModelos = false;
        this.cdr.detectChanges();
      }
    });
  }
}