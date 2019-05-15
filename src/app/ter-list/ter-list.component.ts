import { Component, OnInit, ViewChild } from '@angular/core';
import {TerrainService} from '../shared_services/terrain.service';
import { Terrain } from './terrain';
import { MatTableDataSource, MatPaginator } from '@angular/material';
@Component({
  selector: 'app-ter-list',
  templateUrl: './ter-list.component.html',
  styleUrls: ['./ter-list.component.css']
})
export class TerListComponent implements OnInit {
  terrains: Array<Terrain>;
  dataSource:any;
  displayedColumns: string[] = ['nom', 'lieu'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private tss:TerrainService) { }

  ngOnInit() {
   this.tss.getAll().subscribe( data => {
     this.dataSource = new MatTableDataSource<Terrain>(data._embedded.terrains);
     this.dataSource.paginator = this.paginator;
    });
  }

}
