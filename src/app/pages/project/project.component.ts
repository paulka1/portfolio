import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

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

