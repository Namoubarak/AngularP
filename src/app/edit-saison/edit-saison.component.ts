import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-saison',
  templateUrl: './edit-saison.component.html',
  styleUrls: ['./edit-saison.component.css']
})
export class EditSaisonComponent implements OnInit {
  form = new FormGroup({
    label:new FormControl(),
})
constructor(private router: Router,
  public dialogRef: MatDialogRef<EditSaisonComponent>,
 @Inject(MAT_DIALOG_DATA) public data: any) { }

 ngOnInit() {

}
onNoClick(): void {
  this.dialogRef.close();
  }
  onSubmit(){
  this.dialogRef.close(this.form.value);
  this.router.navigateByUrl('//localhost:8080/arbitres');
  }
}
