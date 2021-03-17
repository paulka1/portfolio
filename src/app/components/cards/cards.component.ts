import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
@Input() titleCard;
@Input() imgSrc;
@Input() imgAlt;
@Input() titleJob;
@Input() text;
@Input() href;
@Input() date;
  constructor() { }

}
