import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-ab-photo',
  templateUrl: './ab-photo.component.html',
  styleUrls: ['./ab-photo.component.scss']
})

export class AbPhotoComponent implements OnInit {
  @ViewChild('frame', {read: ElementRef}) frame: ElementRef
  constructor() { 
  }

  image1:boolean
  image2:boolean
  image3:boolean

  images = ["http://dummyimage.com/300x300/000000/fff",
              "http://dummyimage.com/300x300/ffcc00/000",
              "http://dummyimage.com/300x300/ff0000/000",
              "http://dummyimage.com/300x300/ff00cc/000",
              "http://dummyimage.com/300x300/ccff00/000"];

  ngAfterViewInit(): void {
    // outputs `I am span`
    // console.log(this.main_photo);
    // console.log(this.frame.nativeElement);

    // console.log(this.tref.nativeElement.textContent);

    // console.log(this.frame.nativeElement.textContent, "works");
}

// @HostListener('window:scroll', ['$event']) // for window scroll events
// onScroll(event) {
//       console.log(event)

// }


  ngOnInit(): void {
      this.image1 = true;
    // gsap.to('#frame', {
    //   scrollTrigger : {
    //     trigger: '#hello_presentation',
    //     toggleActions: "restart none none pause",
        
    //   },
    //   x:+400,
    //   duration:2
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
