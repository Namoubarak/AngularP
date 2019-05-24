import { Component, OnInit } from '@angular/core';
import { ArbitreServiceService } from '../shared_services/arbitre-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-arbitre',
  templateUrl: './arbitre.component.html',
  styleUrls: ['./arbitre.component.css']
})
export class ArbitreComponent implements OnInit {

  constructor(private tss:ArbitreServiceService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
      
  }

}
