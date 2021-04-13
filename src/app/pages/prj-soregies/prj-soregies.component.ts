import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ProjetEnum } from "../../enum/enum";

@Component({
  selector: 'app-prj-soregies',
  templateUrl: './prj-soregies.component.html',
  styleUrls: ['./prj-soregies.component.scss']
})
export class PrjSoregiesComponent {

  ProjetEnum = ProjetEnum;

  constructor(private router: Router) { }


  navigateToHome(){
    this.router.navigate(['/home']);
  }

  navigateToProject1(){
    this.router.navigate(['/prj_bmw']);
  }
}
