import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConversorService } from '../../services/conversor.service';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css'
})
export class ConversorComponent {
  
  cantidad: number = 1;
  de: string = 'USD';
  a: string = 'ARS';
  resultado: number | null = null;

  monedas: string[] = ['USD', 'ARS', 'EUR', 'BRL', 'CLP'];

  constructor(private conversorService: ConversorService) {}

  realizarConversion() {
    this.conversorService.convertir(this.de, this.a, this.cantidad).subscribe({
      // AQUI AGREGAMOS ": any" PARA SOLUCIONAR EL ERROR
      next: (datos: any) => { 
        console.log("Datos de la conversión:", datos);
        this.resultado = datos.result; 
      },
      error: (err: any) => { 
        console.error("Error en la API de monedas", err);
      }
    });
  }
}