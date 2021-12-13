import {Component, Input } from '@angular/core';
import {CompetenceTechniqueEnum, ProjetEnum} from "../../enum/enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-article',
  templateUrl: './header-article.component.html',
  styleUrls: ['./header-article.component.scss']
})
export class HeaderArticleComponent {

  constructor(private router: Router) {
  }

  @Input() title;
  @Input() article1;
  @Input() article2;
  @Input() article3;

  navigateToProject(article){
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
