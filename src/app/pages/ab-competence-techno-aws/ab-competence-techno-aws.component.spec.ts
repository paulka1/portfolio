import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbCompetenceTechnoAwsComponent } from './ab-competence-techno-aws.component';

describe('AbCompetenceTechnoAwsComponent', () => {
  let component: AbCompetenceTechnoAwsComponent;
  let fixture: ComponentFixture<AbCompetenceTechnoAwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbCompetenceTechnoAwsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbCompetenceTechnoAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
