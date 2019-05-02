import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/pikachu';

  constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get(this.apiUrl);
  }

  getPokemonByName(name: string) {
    return this.http.get(this.apiUrl + 'pokemon/' + name);
  }
}
