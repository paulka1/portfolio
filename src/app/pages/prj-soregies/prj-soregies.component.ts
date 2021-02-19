import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prj-soregies',
  templateUrl: './prj-soregies.component.html',
  styleUrls: ['./prj-soregies.component.scss']
})
export class PrjSoregiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }

  navigateToProject1(){
    this.router.navigate(['/prj_bmw']);
  }
}
