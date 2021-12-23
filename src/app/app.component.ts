import {Component, HostListener, Input} from '@angular/core';
import {Router} from "@angular/router";
import {CompetenceTechniqueEnum, ProjetEnum} from "./enum/enum";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolioBon';

  visible:boolean;

  headerHome:boolean;
  headerProjet:boolean;
  headerArticle:boolean;

  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {
    this.url = this.router.url;
    this.checkUrl();
    if(window.pageYOffset > 200){
      this.visible = true;
    }
    if(window.pageYOffset < 200){
      this.visible = false;
    }
  }

  url: string;

  constructor(private router : Router) {}

  ngOnInit(): void {
    this.visible = false;
  }

  @Input() article1;
  @Input() article2;
  @Input() article3;

  CompetenceTechniqueEnum = CompetenceTechniqueEnum;
  ProjetEnum = ProjetEnum;

  checkUrl(){
    console.log("SUBESTRING",this.url.substring(0,4));
    if(this.url.substring(0,4) == '/prj'){
      this.headerProjet = true;
      this.headerArticle = false;
      this.headerHome = false;
    }
    else if(this.url.substring(0,8) == '/article'){
      this.headerArticle = true;
      this.headerHome = false;
      this.headerProjet = false;
    }
    else {
      this.headerHome = true;
      this.headerArticle = false;
      this.headerProjet = false;
    }
  }

  navigateToProject(article) {
    switch (article) {
      case '':
        this.router.navigate(['/home']);
        break;
      case CompetenceTechniqueEnum.ANGULAR:
        this.router.navigate(['/article_angular']);
        break;
      case CompetenceTechniqueEnum.ADOBE:
        this.router.navigate(['/article_adobe']);
        break;
      case CompetenceTechniqueEnum.NODEJS:
        this.router.navigate(['/article_nodejs']);
        break;
      case ProjetEnum.SOREGIES:
        this.router.navigate(['/prj_soregies']);
        break;
      case ProjetEnum.BMW:
        this.router.navigate(['/prj_bmw']);
        break;
      case ProjetEnum.SCOUT:
        this.router.navigate(['/prj_scout']);
        break;
      case CompetenceTechniqueEnum.AWS:
        this.router.navigate(['/article_aws']);
        break;
      default:
        break;
    }
  }
}
