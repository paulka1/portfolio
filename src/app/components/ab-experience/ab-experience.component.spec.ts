import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbExperienceComponent } from './ab-experience.component';

describe('AbExperienceComponent', () => {
  let component: AbExperienceComponent;
  let fixture: ComponentFixture<AbExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
