import { Component } from '@angular/core';
import { CompetenceTechniqueEnum } from "../../enum/enum";

@Component({
  selector: 'app-ab-competence',
  templateUrl: './ab-competence.component.html',
  styleUrls: ['./ab-competence.component.scss']
})
export class AbCompetenceComponent {

  CompetenceTechniqueEnum = CompetenceTechniqueEnum;
}
