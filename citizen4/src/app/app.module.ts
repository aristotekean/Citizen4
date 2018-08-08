import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Imports Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Configuracion Firebase
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';

// Servicios
import { CrudService } from './services/crud.service';
import { PruebaService } from './services/prueba.service';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence() /// Guardar datos offline
  ],
  providers: [CrudService, PruebaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
