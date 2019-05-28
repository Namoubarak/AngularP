import { Component, OnInit, ViewChild ,Inject} from '@angular/core';
import { ArbitreServiceService } from '../shared_services/arbitre-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AddArbComponent } from '../add-arb/add-arb.component';
import { EditArbComponent } from '../edit-arb/edit-arb.component';


export interface Arbitre{
  cin:string,
  date_naissance:string,
  n_license:string,
  nom:string,
  prenom:string,
  photo:string 	
}

@Component({
  selector: 'app-arbitre',
  templateUrl: './arbitre.component.html',
  styleUrls: ['./arbitre.component.css']
})

export class ArbitreComponent implements OnInit {

  arbitres: Array<Arbitre>;

  dataSource:any;

  displayedColumns: string[] = ['nom','prenom','cin','date_naissance','n_license','photo','action'];

  cin:string;
  date_naissance:string;
  n_license:string;
  nom:string;
  prenom:string;
  photo:string;	

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private tss:ArbitreServiceService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
   this.getData()
  }
  getData(){
    this.tss.getAll().subscribe( data => {
      this.dataSource = new MatTableDataSource<Arbitre>(data._embedded.arbitres);
      this.dataSource.paginator = this.paginator;
     });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  removeItem(id:string){
    const data =  this.dataSource.data;
    data.splice(data.findIndex(x=>{x.id=id}),1)
    this.dataSource.data = data;
  }
  gotoList() {
    this.router.navigateByUrl('//localhost:8080/arbitres');
  }
  remove(id:string){
  this.tss.remove(id).subscribe(result => {
   this.removeItem(id)
  }, error => console.error(error));
  
  }
openDialog(): void {
  //const dialogRef = this.dialog.open(AddTerdiaComponent, {
    
  //});  
  //dialogRef.afterClosed().subscribe(result => {
  //  console.log('The dialog was closed');
  //});
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose=true;
  dialogConfig.autoFocus = true;

  const dialogRef = this.dialog.open(AddArbComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(
    data =>{
      this.tss.save(data).then(r=>{
        const data =  this.dataSource.data;
        data.push(r)
        this.dataSource.data = data;
    });}
  );
}
openEdit(element): void {

  const dialogRef = this.dialog.open(EditArbComponent,
                            {
                              data:{
                                  arbitre : element
                                   }
                            });
   dialogRef.afterClosed().subscribe(
     data =>{this.tss.update(data,element.resourceId).then(r=>{
      const data =  this.dataSource.data;
      var index = data.indexOf(element);
      if (index > -1) {
          data.splice(index, 1);
      }
      data.push(r)
      this.dataSource.data=data;
     })
    
    }
     );
}
 
}

