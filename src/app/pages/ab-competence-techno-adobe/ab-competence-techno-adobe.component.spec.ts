import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbCompetenceTechnoAdobeComponent } from './ab-competence-techno-adobe.component';

describe('AbCompetenceTechnoAdobeComponent', () => {
  let component: AbCompetenceTechnoAdobeComponent;
  let fixture: ComponentFixture<AbCompetenceTechnoAdobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbCompetenceTechnoAdobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbCompetenceTechnoAdobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
