import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PokemonService} from '../pokemon.service';
import {Dresseur} from '../dresseur';


@Component({
  selector: 'app-dresseur-liste',
  templateUrl: './dresseur-liste.page.html',
  styleUrls: ['./dresseur-liste.page.scss'],
})
export class DresseurListePage implements OnInit {

  constructor(private router: Router, private ps: PokemonService) {this.ps.setDresseurs()}


  detailsDresseur(dresseur: Dresseur) {


    this.ps.setData(dresseur);

    this.router.navigate(['/details-dresseur']);

  }
  ngOnInit() {
  }

}
