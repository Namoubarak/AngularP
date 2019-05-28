import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-arb',
  templateUrl: './edit-arb.component.html',
  styleUrls: ['./edit-arb.component.css']
})
export class EditArbComponent implements OnInit {
  form = new FormGroup({
      nom:new FormControl(),
      prenom:new FormControl(),
      cin:new FormControl(),
      date_naissance:new FormControl(),
      n_license:new FormControl(),
      photo:new FormControl(),
  })
  constructor(private router: Router,
    public dialogRef: MatDialogRef<EditArbComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) { }

   ngOnInit() {

  }
  
  onNoClick(): void {
  this.dialogRef.close();
  }
  onSubmit(){
  this.dialogRef.close(this.form.value);
  this.router.navigateByUrl('//localhost:8080/saisons');
  }
}
