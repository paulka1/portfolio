import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjBmwComponent } from './prj-bmw.component';

describe('PrjBmwComponent', () => {
  let component: PrjBmwComponent;
  let fixture: ComponentFixture<PrjBmwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrjBmwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjBmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
