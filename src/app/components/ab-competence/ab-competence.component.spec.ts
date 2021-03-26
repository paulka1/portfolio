import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbCompetenceComponent } from './ab-competence.component';

describe('AbCompetenceComponent', () => {
  let component: AbCompetenceComponent;
  let fixture: ComponentFixture<AbCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
