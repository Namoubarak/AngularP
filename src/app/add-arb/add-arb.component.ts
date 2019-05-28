import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AddTerdiaComponent } from '../add-terdia/add-terdia.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-add-arb',
  templateUrl: './add-arb.component.html',
  styleUrls: ['./add-arb.component.css']
})
export class AddArbComponent implements OnInit {

  form: FormGroup;
  
  constructor( private router: Router,
               public dialogRef: MatDialogRef<AddTerdiaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = new FormGroup({
      nom:new FormControl(),
      prenom:new FormControl(),
      cin:new FormControl(),
      date_naissance:new FormControl(),
      n_license:new FormControl(),
      photo:new FormControl(),
    })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  save(){
    
    this.dialogRef.close(this.form.value);
    this.router.navigateByUrl('//localhost:8080/arbitres');
  }
}
