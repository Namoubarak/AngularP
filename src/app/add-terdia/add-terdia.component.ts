import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {TerrainService} from '../shared_services/terrain.service';

@Component({
  selector: 'app-add-terdia',
  templateUrl: './add-terdia.component.html',
  styleUrls: ['./add-terdia.component.css']
})
export class AddTerdiaComponent implements OnInit {

  constructor( private tss:TerrainService,
               public dialogRef: MatDialogRef<AddTerdiaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  save(nom:string,lieu:string){
    this.tss.save(nom,lieu);
    this.dialogRef.close();
  }
}
