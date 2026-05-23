import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http: HttpClient) { }

  convertir(from: string, to: string, amount: number): Observable<any> {
    const url = `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`;
    
    const headers = new HttpHeaders({
      'apikey': 'hCWh3BtY2UqxlHakN8qpduts2HduA9tk'
    });

    return this.http.get(url, { headers });
  }
}