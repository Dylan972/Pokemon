import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PokemonService} from '../pokemon.service';
import {Dresseur} from '../dresseur';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-dresseur-liste',
  templateUrl: './dresseur-liste.page.html',
  styleUrls: ['./dresseur-liste.page.scss'],
})
export class DresseurListePage implements OnInit {

  listeDresseur: string[] = [];

  constructor(private router: Router, private ps: PokemonService) {
    this.ps.setDresseurs();

    let result: any[] = [];

    firebase.database().ref('dresseurs').on('value', resp => {
      console.log('Resp : ' + JSON.stringify(resp));
      result = snapshotToArray(resp);
      for (let i = 0 ; i < result.length ; i++){
        this.listeDresseur.push(result[i].listeEquipes.name);

      }
      console.log(result);
      console.log(JSON.stringify(this.listeDresseur));

//      console.log('Dresseurs : ' + JSON.stringify(result.dresseur1.listeEquipes.name));
      //this.newCharacter = result.character;
    });
  }
  getDresseurs() {
    //console.log(newCharacterName);

    let result: any = {};

    firebase.database().ref('dresseurs').on('value', resp => {
      console.log('Resp : ' + JSON.stringify(resp));
      result = resp.val();
      //this.newCharacter = result.character;
    });
  }

  detailsDresseur(dresseur: Dresseur) {
    this.ps.setData(dresseur);
    this.router.navigate(['/details-dresseur']);
  }

  ngOnInit() {
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
