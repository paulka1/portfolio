import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  displayHeaderImage: boolean = false;

  ngOnInit(): void {
    if (window.screen.width < 600) { // 768px portrait
      this.displayHeaderImage = true;
    }
    gsap.from('.navbar',{opacity:0, duration:5, x:0})
  }
}
