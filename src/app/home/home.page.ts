import { Component } from '@angular/core';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nom: string;
  
  constructor(private  apiService: PokemonService) {
    
    this.apiService.getPokemon().subscribe((val) => {
      const result: any = val;
      console.log('pokemon : ' + JSON.stringify(result));
      console.log('pokemon : ' + JSON.stringify(result.abilities[0].ability.name));

      console.log('pokemon : ' + JSON.stringify(result.name));

    });

  }
  
  
}
