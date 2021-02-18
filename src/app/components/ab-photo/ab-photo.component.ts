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
    if(window.pageYOffset < 2800){
      this.image1 = true;
      this.image2 = false;
      this.image3 = false;
    }
    if(window.pageYOffset > 2800 && window.pageYOffset < 4000){
      this.image1 = false;
      this.image2 = true;
      this.image3 = false;
    }
    if(window.pageYOffset > 4000){
      this.image1 = false;
      this.image2 = false;
      this.image3 = true;
    }
  }

  // @HostListener('window:scroll') onScroll(e: Event): void {
  //   console.log("scrool", this.getYPosition(e));
  // }
  //
  // getYPosition(e: Event): number {
  //   return (e.target as Element).scrollTop;
  // }

  ngOnInit(): void {

    // ScrollTrigger.create({
    //   trigger:'.experience_about',
    //   onUpdate:()=> {
    //     console.log("photo1");
    //     this.image1 = !this.image1
    //   }
    // });
    // ScrollTrigger.create({
    //   trigger:'.link_about',
    //   onUpdate:()=>{
    //     console.log("photo2");
    //     this.image2 = !this.image2
    //   }
    // });

    // ScrollTrigger.create({
    //   trigger:'.link_about',
    //   onUpdate:()=>console.log("VASSSSSSSS"),
    //   markers:true
    // });
    //   $(document).ready(function () {
    //     this.switchImage();
    // });

    // $(window).scroll(function () {
    //     this.switchImage();
    // });

    // let sections = gsap.utils.toArray(".panel");

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger:".main_photo",
    //     pin:true,
    //     scrub:1,
    //     snap:1/(sections.length-1),
    //     end: () => "+=" +
    //     document.querySelector("#frame")
    //   }
    // })
  }

//   switchImage() {
//     var sTop = $(window).scrollTop();
//     var index = sTop > 0 ? $(document).height() / sTop : 0;
//     index = Math.round(index) % this.images.length;
//     //console.log(index);
//     $("#frame").css('background-image', 'url(' + this.images[index] + ')');
// }
}
