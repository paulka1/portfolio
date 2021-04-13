import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import { CompetenceTechniqueEnum } from "../../enum/enum";

@Component({
  selector: 'app-ab-competence-techno',
  templateUrl: './ab-competence-techno.component.html',
  styleUrls: ['./ab-competence-techno.component.scss']
})
export class AbCompetenceTechnoComponent {

  constructor(private router: Router) {
  }

  @Input() srcLogo;
  @Input() srcLogoArticle;
  @Input() isArticle;
  @Input() altLogo;
  @Input() technologie;

  navigateToProject(technologie) {
    switch (technologie) {
      case CompetenceTechniqueEnum.ANGULAR:
        this.router.navigate(['/article_angular']);
        break;
      case CompetenceTechniqueEnum.ADOBE:
        this.router.navigate(['/article_adobe']);
    }
  }
}
