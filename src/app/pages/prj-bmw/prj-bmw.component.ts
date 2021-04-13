import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ProjetEnum } from "../../enum/enum";

@Component({
  selector: 'app-prj-bmw',
  templateUrl: './prj-bmw.component.html',
  styleUrls: ['./prj-bmw.component.scss']
})
export class PrjBmwComponent {

  ProjetEnum = ProjetEnum;

  constructor(private router: Router) { }

}
