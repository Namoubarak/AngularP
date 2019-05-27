import { Component, OnInit, ViewChild ,Inject} from '@angular/core';
import {TerrainService} from '../shared_services/terrain.service';
import { Terrain } from './terrain';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {AddTerdiaComponent} from '../add-terdia/add-terdia.component';
import {EditerTerComponent} from '../editer-ter/editer-ter.component';



@Component({
  selector: 'app-ter-list',
  templateUrl: './ter-list.component.html',
  styleUrls: ['./ter-list.component.css']
})
export class TerListComponent implements OnInit {
  terrains: Array<Terrain>;
  dataSource:any;

  displayedColumns: string[] = ['nom', 'lieu','action'];
  name: string;
  lieu: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private tss:TerrainService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }
  
 openDialog(): void {
    //const dialogRef = this.dialog.open(AddTerdiaComponent, {
      
    //});  
    //dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
    //});
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose=true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddTerdiaComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data =>{this.tss.save(data).then(r=>{
        const data =  this.dataSource.data;
        data.push(r)
        this.dataSource.data = data;
      });}
    );
  }
  openEdit(element): void {

    const dialogRef = this.dialog.open(EditerTerComponent,
                              {
                                data:{
                                    terrain : element
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
   
  ngOnInit() {
   this.getData()
  }
  getData(){
    this.tss.getAll().subscribe( data => {
      this.dataSource = new MatTableDataSource<Terrain>(data._embedded.terrains);
      this.dataSource.paginator = this.paginator;
     });
  }
  removeItem(id:string){
    const data =  this.dataSource.data;
    data.splice(data.findIndex(x=>{x.id=id})-1,1)
    this.dataSource.data = data;
  }

  gotoList() {
    this.router.navigateByUrl('//localhost:8080/terrains');
  }

  remove(id:string){
      console.log('href : ',id);
      
    this.tss.remove(id).subscribe(result => {
     this.removeItem(id)
    }, error => console.error(error));
    
  }
  
}

  
  


