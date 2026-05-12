import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista';
import { NomiPokemonComponent } from './pokemon/pokemon';
import { DescrizionePokemonComponent } from './dettagli/dettagli';


export const routes: Routes = [
    { path: '', component: ListaComponent },
    { path: 'lista/:tipo', component: ListaComponent },
    { path: 'nomi-pokemon/:tipo', component: NomiPokemonComponent },
    { path: 'descrizione-pokemon/:name', component: DescrizionePokemonComponent }

];
