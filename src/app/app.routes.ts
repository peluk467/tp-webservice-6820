import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { AudioComponent } from './components/audio/audio.component';
import { CarmakerComponent } from './components/carmaker/carmaker.component'; // <-- NUEVO

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'conversor', component: ConversorComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'autos', component: CarmakerComponent }, // <-- NUEVO: Ruta para la sección de autos
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];