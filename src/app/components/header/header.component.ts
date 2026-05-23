import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // <-- 1. Importar esto

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // <-- 2. Agregarlos aquí
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent { }