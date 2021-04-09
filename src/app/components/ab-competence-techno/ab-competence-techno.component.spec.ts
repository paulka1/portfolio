import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbCompetenceTechnoComponent } from './ab-competence-techno.component';

describe('AbCompetenceTechnoComponent', () => {
  let component: AbCompetenceTechnoComponent;
  let fixture: ComponentFixture<AbCompetenceTechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbCompetenceTechnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbCompetenceTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
