import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerListComponent } from './ter-list/ter-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { ArbitreComponent } from './arbitre/arbitre.component';
import { MatcheComponent } from './matche/matche.component';
import { JoueurComponent } from './joueur/joueur.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddTerdiaComponent } from './add-terdia/add-terdia.component';
@NgModule({
  declarations: [
    AppComponent,
    TerListComponent,
    ArbitreComponent,
    MatcheComponent,
    JoueurComponent,
    AddTerdiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  entryComponents:[
    AddTerdiaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
