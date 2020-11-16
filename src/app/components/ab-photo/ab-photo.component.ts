import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common'

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-ab-photo',
  templateUrl: './ab-photo.component.html',
  styleUrls: ['./ab-photo.component.scss']
})

export class AbPhotoComponent implements OnInit {
@ViewChild('exemple', { static:true }) exemple: ElementRef<HTMLDivElement>
  constructor(@Inject(DOCUMENT) private document: Document) { 
  }

  ngOnInit(): void {
    //  gsap.to('.exemple', {
    //   scrollTrigger : {
    //     trigger: '.exemple',
    //     toggleActions: "restart none reverse pause"
    //   },
    //   opacity:0,
    //   duration:2
    // });

    // gsap.to('.exemple1', {
    //   scrollTrigger : {
    //     trigger: '.exemple',
    //     toggleActions: "restart none reverse pause"
    //   },
    //   opacity:1,
    //   duration:2
    // });

      // gsap.to('.exemple1',
      // {
      //   scrollTrigger : ".exemple1",
      //   opacity:1,
      //   duration:2,
      //  })
    //  this.initScrollAnimation();
  }

  // initScrollAnimation(): void{
  //   gsap.to('.exemple', {
  //     scrollTrigger: {
  //       trigger : '.exemple', 
  //       scrub:  true,
  //       start:'100% center'      }
  //   })}

}
