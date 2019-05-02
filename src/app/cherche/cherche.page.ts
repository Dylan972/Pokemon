import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-cherche',
  templateUrl: './cherche.page.html',
  styleUrls: ['./cherche.page.scss'],
})
export class CherchePage implements OnInit {

  nom: string;
  searchPokemon: string = '';
  nomPokemon: string = '';
  typePokemon: string = '';
  listAttaque: any[];
  photoMale: string;
  photoFemele: string;
  photoShiny: string;
  constructor(private  apiService: PokemonService) {

  }

  TrouverPokemon(pokemon) {

    this.apiService.getPokemonByName(pokemon).subscribe( value => {
      const result: any = value;
      console.log('pokemon : ' + JSON.stringify(result));
      console.log('pokemon : ' + JSON.stringify(result.abilities[0].ability.name));
      console.log('pokemon : ' + JSON.stringify(result.name));
      this.nomPokemon = JSON.stringify(result.name);
      this.typePokemon = JSON.stringify(result.types[0].type.name);
      this.listAttaque = result.abilities;
      console.log(result.sprites.front_default);
      this.photoMale = result.sprites.front_default;
      this.photoFemele = result.sprites.front_female;
      this.photoShiny = result.sprites.front_shiny;
      console.log("Liste : "  + JSON.stringify(this.listAttaque));
      for (let i = 0; i < this.listAttaque.length; i++) {
        console.log(this.listAttaque[i].ability.name);
      }
    });
  }

  ngOnInit() {
  }

}
