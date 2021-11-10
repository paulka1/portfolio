import { Component } from '@angular/core';
import { ProjetEnum } from "../../enum/enum";

@Component({
  selector: 'app-prj-bmw',
  templateUrl: './prj-bmw.component.html',
  styleUrls: ['./prj-bmw.component.scss']
})
export class PrjBmwComponent {

  ProjetEnum = ProjetEnum;

  constructor() {
    window.scrollTo(0, 0)
  }

}
