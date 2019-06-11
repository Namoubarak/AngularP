import { Component, OnInit, ViewChild ,Inject} from '@angular/core';
import {SaisonService} from '../shared_services/saison.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AddSaisonComponent } from '../add-saison/add-saison.component';
import { EditSaisonComponent } from '../edit-saison/edit-saison.component';

export interface Saison{
  label:string,
}

@Component({
  selector: 'app-saison',
  templateUrl: './saison.component.html',
  styleUrls: ['./saison.component.css']
})
export class SaisonComponent implements OnInit {
  saisons: Array<Saison>;

  dataSource:any;

  displayedColumns: string[] = ['label','action'];
  label:string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private tss:SaisonService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

    ngOnInit() {
      this.getData()
     }
     getData(){
      this.tss.getAll().subscribe( data => {
        this.dataSource = new MatTableDataSource<Saison>(data._embedded.saisons);
        this.dataSource.paginator = this.paginator;
       });
    }
    removeItem(id:string){
      const data =  this.dataSource.data;
      data.splice(data.findIndex(x=>{x.id=id})-1,1)
      this.dataSource.data = data;
    }
    gotoList() {
      this.router.navigateByUrl('//localhost:8080/saisons');
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
    
      const dialogRef = this.dialog.open(AddSaisonComponent, dialogConfig);
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

      const dialogRef = this.dialog.open(EditSaisonComponent,
                                {
                                  data:{
                                      saison : element
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
