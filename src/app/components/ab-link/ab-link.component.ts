import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ab-link',
  templateUrl: './ab-link.component.html',
  styleUrls: ['./ab-link.component.scss']
})
export class AbLinkComponent implements OnInit {

  constructor() { }

  isPhoneDevice: boolean;

  ngOnInit(): void {
    if (window.screen.width < 600) { // 768px portrait
      this.isPhoneDevice = true;
    }
  }


}
