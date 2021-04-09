import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ab-competence-techno',
  templateUrl: './ab-competence-techno.component.html',
  styleUrls: ['./ab-competence-techno.component.scss']
})
export class AbCompetenceTechnoComponent {

  @Input() srcLogo;
  @Input() srcLogoArticle;
  @Input() isArticle;
  @Input() altLogo;
  @Input() technologie;

}
