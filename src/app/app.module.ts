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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatSidenavModule} from '@angular/material';
import { DatePipe } from '@angular/common';
import { SaisonComponent } from './saison/saison.component';
import { AddSaisonComponent } from './add-saison/add-saison.component';
import { EditSaisonComponent } from './edit-saison/edit-saison.component';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatIconModule} from '@angular/material/icon';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout'; 
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
    SaisonComponent,
    AddSaisonComponent,
    EditSaisonComponent,
    MainNavComponent
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
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatGridListModule
    
  ],
  entryComponents:[
    AddTerdiaComponent,
    EditerTerComponent,
    AddArbComponent,
    EditArbComponent,
    AddSaisonComponent,
    EditSaisonComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
