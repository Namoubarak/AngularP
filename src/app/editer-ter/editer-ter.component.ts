import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editer-ter',
  templateUrl: './editer-ter.component.html',
  styleUrls: ['./editer-ter.component.css']
})
export class EditerTerComponent implements OnInit {
  
  form = new FormGroup({
    nom:new FormControl(),
    lieu:new FormControl()
  })
  constructor( private router: Router,
    public dialogRef: MatDialogRef<EditerTerComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) { }

ngOnInit() {

}

onNoClick(): void {
this.dialogRef.close();
}
save(){

this.dialogRef.close(this.form.value);
this.router.navigateByUrl('//localhost:8080/terrains');
}

  

}
