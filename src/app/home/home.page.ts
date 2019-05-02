import { Component } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nom: string;
  
  constructor(private  apiService: PokemonService, private router: Router) {


  }

    VerPageModifier() {
        this.router.navigate(['/cherche']);
    }
  }

