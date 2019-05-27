import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerListComponent } from './ter-list/ter-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { ArbitreComponent } from './arbitre/arbitre.component';
import { MatcheComponent } from './matche/matche.component';
import { JoueurComponent } from './joueur/joueur.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddTerdiaComponent } from './add-terdia/add-terdia.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EditerTerComponent } from './editer-ter/editer-ter.component';
import { AddArbComponent } from './add-arb/add-arb.component';
import { EditArbComponent } from './edit-arb/edit-arb.component';
@NgModule({
  declarations: [
    AppComponent,
    TerListComponent,
    ArbitreComponent,
    MatcheComponent,
    JoueurComponent,
    AddTerdiaComponent,
    EditerTerComponent,
    AddArbComponent,
    EditArbComponent,
  
    
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
    FormsModule,
    ReactiveFormsModule
    
  ],
  entryComponents:[
    AddTerdiaComponent,
    EditerTerComponent,
    AddArbComponent,
    EditArbComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }