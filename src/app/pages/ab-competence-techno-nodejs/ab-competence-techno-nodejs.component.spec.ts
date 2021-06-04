import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbCompetenceTechnoNodejsComponent } from './ab-competence-techno-nodejs.component';

describe('AbCompetenceTechnoNodejsComponent', () => {
  let component: AbCompetenceTechnoNodejsComponent;
  let fixture: ComponentFixture<AbCompetenceTechnoNodejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbCompetenceTechnoNodejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbCompetenceTechnoNodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
