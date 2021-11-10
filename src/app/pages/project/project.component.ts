import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router, NavigationEnd} from '@angular/router';
import {ProjetEnum} from "../../enum/enum";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  ProjetEnum = ProjetEnum;

  navigate(project){
    switch(project) {
      case ProjetEnum.BMW:
        this.router.navigate(['/prj_bmw']);
        break;
      case ProjetEnum.SOREGIES:
        this.router.navigate(['/prj_soregies']);
        break;
      case ProjetEnum.SCOUT:
        this.router.navigate(['/prj_scout']);
        break;
    }
  }
}

