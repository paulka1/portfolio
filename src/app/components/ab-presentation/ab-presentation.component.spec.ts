import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbPresentationComponent } from './ab-presentation.component';

describe('AbPresentationComponent', () => {
  let component: AbPresentationComponent;
  let fixture: ComponentFixture<AbPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
