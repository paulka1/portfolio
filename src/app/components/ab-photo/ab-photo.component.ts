import {Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {BehaviorSubject} from 'rxjs';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-ab-photo',
  templateUrl: './ab-photo.component.html',
  styleUrls: ['./ab-photo.component.scss']
})

export class AbPhotoComponent implements OnInit {
  image1: boolean;
  image2: boolean;
  image3: boolean;

  constructor() {
    this.image1 = true;
    this.image2 = false;
    this.image3 = false;
  }


  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {
    if(window.pageYOffset < 3700){
      this.image1 = true;
      this.image2 = false;
      this.image3 = false;
    }
    if(window.pageYOffset > 3700 && window.pageYOffset < 4800){
      this.image1 = false;
      this.image2 = true;
      this.image3 = false;
    }
    if(window.pageYOffset > 4800){
      this.image1 = false;
      this.image2 = false;
      this.image3 = true;
    }
  }

  ngOnInit(): void {
  }
}
