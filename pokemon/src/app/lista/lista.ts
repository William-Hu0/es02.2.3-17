import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-lista',
  imports: [CommonModule, RouterModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  pokemonTypes = [
  { name: 'normal' },
  { name: 'fighting' },
  { name: 'flying' },
  { name: 'poison' },
  { name: 'ground' },
  { name: 'rock' },
  { name: 'bug' },
  { name: 'ghost' },
  { name: 'steel' },
  { name: 'fire' },
  { name: 'water' },
  { name: 'grass' },
  { name: 'electric' },
  { name: 'psychic' },
  { name: 'ice' },
  { name: 'dragon' },
  { name: 'dark' },
  { name: 'fairy' },
  { name: 'unknown' },
  { name: 'shadow' }
];
}
