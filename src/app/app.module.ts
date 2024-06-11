import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyA6f1glhS3AigmxgXMOIT7Kd3dp1Nf2GDQ",
        authDomain: "teste-base-b4bbf.firebaseapp.com",
        projectId: "teste-base-b4bbf",
        storageBucket: "teste-base-b4bbf.appspot.com",
        messagingSenderId: "61127325832",
        appId: "1:61127325832:web:2cadd06122b8f7c466473d"
    }),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
