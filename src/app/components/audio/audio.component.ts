import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.css'
})
export class AudioComponent {
  
  textoLeido: string = '¡Hola! Bienvenidos a mi Trabajo Práctico de Angular.';
  vozElegida: string = 'alloy'; 
  urlAudio: string | null = null;
  cargando: boolean = false;

  constructor(private audioService: AudioService) {}

  reproducirTexto() {
    if (!this.textoLeido.trim()) return;

    this.cargando = true;
    this.urlAudio = null; 

    this.audioService.generarAudio(this.textoLeido, this.vozElegida).subscribe({
      next: (archivoBlob: Blob) => {
        
        this.urlAudio = URL.createObjectURL(archivoBlob);
        this.cargando = false;
      },
      error: (err: any) => {
        console.error('Error al generar el audio', err);
        this.cargando = false;
      }
    });
  }
}