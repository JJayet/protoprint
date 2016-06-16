import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ProtoprintAppComponent, environment } from './app/';
import { ROUTER_PROVIDERS } from '@angular/router';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(ProtoprintAppComponent,
  [ROUTER_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyDta4PPiRdBOK23uB-KhgaoTCvSR7PBjNY",
      authDomain: "project-733431008235281507.firebaseapp.com",
      databaseURL: "https://project-733431008235281507.firebaseio.com",
      storageBucket: "",
    })]);

