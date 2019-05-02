import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyA_jjKJcW9IuH1UDJdCpxuRnAXbrlU4_kk",
  authDomain: "pokemonprojet44.firebaseapp.com",
  databaseURL: "https://pokemonprojet44.firebaseio.com",
  projectId: "pokemonprojet44",
  storageBucket: "pokemonprojet44.appspot.com",
  messagingSenderId: "420925043443"
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Dresseurs',
      url: '/dresseur-liste',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
