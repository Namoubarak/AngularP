import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-saison',
  templateUrl: './add-saison.component.html',
  styleUrls: ['./add-saison.component.css']
})
export class AddSaisonComponent implements OnInit {

  form: FormGroup;
  
  constructor( private router: Router,
               public dialogRef: MatDialogRef<AddSaisonComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  this.form = new FormGroup({
    label:new FormControl()
  })
  }

  onNoClick(): void {
   this.dialogRef.close();
    }
  save(){
      this.dialogRef.close(this.form.value);
      this.router.navigateByUrl('//localhost:8080/saisons');
    }

}
