import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup,  FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-terdia',
  templateUrl: './add-terdia.component.html',
  styleUrls: ['./add-terdia.component.css']
})
export class AddTerdiaComponent implements OnInit {

  form: FormGroup;
  
  constructor( private router: Router,
               public dialogRef: MatDialogRef<AddTerdiaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = new FormGroup({
      nom:new FormControl(),
      lieu:new FormControl()
    })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  save(){
    this.dialogRef.close(this.form.value);
    this.router.navigateByUrl('//localhost:8080/terrains');
  }
}
