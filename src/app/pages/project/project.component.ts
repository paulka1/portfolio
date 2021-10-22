import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {ProjetEnum} from "../../enum/enum";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  constructor(private router: Router) {
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

