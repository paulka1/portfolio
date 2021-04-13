import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbCompetenceTechnoAngularComponent } from './ab-competence-techno-angular.component';

describe('AbCompetenceTechnoAngularComponent', () => {
  let component: AbCompetenceTechnoAngularComponent;
  let fixture: ComponentFixture<AbCompetenceTechnoAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbCompetenceTechnoAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbCompetenceTechnoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
