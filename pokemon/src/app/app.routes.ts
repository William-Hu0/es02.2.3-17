import { Routes } from '@angular/router';
import { Lista } from './lista/lista';
import { Pokemon } from './pokemon/pokemon';
import { Dettagli } from './dettagli/dettagli';
export const routes: Routes = [
{ path: 'lista', component: Lista },
  { path: 'pokemon', component: Pokemon },
  { path: 'dettagli', component: Dettagli},
];
