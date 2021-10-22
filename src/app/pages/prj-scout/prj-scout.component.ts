import { Component, OnInit } from '@angular/core';
import { ProjetEnum } from "../../enum/enum";

@Component({
  selector: 'app-prj-scout',
  templateUrl: './prj-scout.component.html',
  styleUrls: ['./prj-scout.component.scss']
})
export class PrjScoutComponent implements OnInit {

  constructor() { }

  ProjetEnum = ProjetEnum;

  ngOnInit(): void {
  }

}
