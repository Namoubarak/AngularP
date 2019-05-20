import { Component, OnInit, ViewChild } from '@angular/core';
import {TerrainService} from '../shared_services/terrain.service';
import { Terrain } from './terrain';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ter-list',
  templateUrl: './ter-list.component.html',
  styleUrls: ['./ter-list.component.css']
})
export class TerListComponent implements OnInit {
  terrains: Array<Terrain>;
  dataSource:any;
  displayedColumns: string[] = ['nom', 'lieu','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private tss:TerrainService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
   this.tss.getAll().subscribe( data => {
     this.dataSource = new MatTableDataSource<Terrain>(data._embedded.terrains);
     this.dataSource.paginator = this.paginator;
    });
  }
  gotoList() {
    this.router.navigate(['/terrains']);
  }
    remove(href:string){
      console.log('href : ',href);
    this.tss.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
