import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DescrizionePokemon } from '../Models/Models';

@Component({
  selector: 'app-descrizione-pokemon',
  imports: [CommonModule],
  templateUrl: './dettagli.html',
  styleUrl: './dettagli.css',
})
export class DescrizionePokemonComponent implements OnInit {
  data!: DescrizionePokemon;
  o!: Observable<DescrizionePokemon>;
  loading = false;
  nome = '';

  constructor(public http: HttpClient, private route: ActivatedRoute, private location: Location) {
    this.nome = this.route.snapshot.params['name'];
    console.log('Pokemon selezionato:', this.nome);
  }

  ngOnInit(): void {
    this.RequestPokemonDescription();
  }

  RequestPokemonDescription(): void {
    if (!this.nome) {
      return;
    }
    this.loading = true;
    this.o = this.http.get<DescrizionePokemon>(`https://pokeapi.co/api/v2/pokemon/${this.nome}`);
    this.o.subscribe({
      next: this.GetPokemon,
      error: (err) => {
        console.error('Errore nella richiesta descrizione:', err);
        this.loading = false;
      }
    });
  }

  GetPokemon = (d: DescrizionePokemon) => {
    console.log('Dati pokemon ricevuti:', d);
    this.loading = false;
    this.data = d;
  };

  goBack(): void {
    this.location.back();
  }
}
