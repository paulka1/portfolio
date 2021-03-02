import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prj-bmw',
  templateUrl: './prj-bmw.component.html',
  styleUrls: ['./prj-bmw.component.scss']
})
export class PrjBmwComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }

  navigateToProject1(){
    this.router.navigate(['/prj_soregies']);
  }
}
