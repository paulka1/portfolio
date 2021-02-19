import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  // hover:boolean;
  // hover2:boolean;
  // hover3:boolean;
  // hover4:boolean;
  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  navigateToProject1() {
    this.router.navigate(['/prj_bmw']);
  }

  navigateToProject2() {
    this.router.navigate(['/prj_soregies']);
  }
}

