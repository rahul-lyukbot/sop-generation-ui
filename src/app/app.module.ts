import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [AppComponent, FormComponent, SuccessComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyD6FMtAhRB8bCk7Uz5hiE8KNs4n2WW9OXE',

      authDomain: 'sop-genrator.firebaseapp.com',

      projectId: 'sop-genrator',

      storageBucket: 'sop-genrator.appspot.com',

      messagingSenderId: '464908131367',

      appId: '1:464908131367:web:071ee38f982c954cfcc202',

      measurementId: 'G-QBMLXFH4E9',
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
