import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  hover:boolean;
  hover2:boolean;
  hover3:boolean;
  hover4:boolean;
  constructor() { }

  ngOnInit(): void {
    
     gsap.from('.bloc1', {
      scrollTrigger : {
        trigger: '.ligne1',
        toggleActions: "restart none none pause",
        
      },
      x:-400,
      rotation:360,
      duration:2
    });

    gsap.from('.bloc2', {
      scrollTrigger : {
        trigger: '.ligne1',
        toggleActions: "restart none none pause",
        
      },
      x:-800,
      rotation:-360,
      duration:2
    });

    gsap.from('.bloc3', {
      scrollTrigger : {
        trigger: '.ligne2',
        toggleActions: "restart none none pause",
        
      },
      x:-400,
      rotation:-360,
      duration:2
    });

    gsap.from('.bloc4', {
      scrollTrigger : {
        trigger: '.ligne2',
        toggleActions: "restart none none pause",
        
      },
      x:-800,
      rotation:-360,
      duration:2
    });
  }
  
  styleBloc1Hover(): Object {
    if (this.hover === true){
        return {backgroundImage:"url(../../../assets/img/train.svg)"}
    }
    if (this.hover2 === true){
      return {backgroundImage:"url(../../../assets/img/enterprise.png)"}
  }
    if (this.hover3 === true){
      return {backgroundImage:"url(../../../assets/img/train.svg)"}
  }
    if (this.hover4 === true){
      return {backgroundImage:"url(../../../assets/img/train.svg)"}
    }
    return {}
}
}
