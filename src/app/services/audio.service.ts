import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private http: HttpClient) { }

  // Recibe el texto a leer y la voz elegida
  generarAudio(texto: string, voz: string): Observable<Blob> {
    const url = 'https://open-ai-text-to-speech1.p.rapidapi.com/';
    
    const headers = new HttpHeaders({
      'x-rapidapi-key': '5368067644msh380c5cf851f0ec2p1e0c4fjsn1cfbb03467aa', // <-- ¡Pega tu Key aquí!
      'x-rapidapi-host': 'open-ai-text-to-speech1.p.rapidapi.com',
      'Content-Type': 'application/json'
    });

    // El formato exacto que pide la API de OpenAI
    const body = {
      model: 'tts-1',
      input: texto,
      voice: voz
    };

    // Le decimos a Angular que espere un archivo (blob), no un texto
    return this.http.post(url, body, { headers, responseType: 'blob' });
  }
}