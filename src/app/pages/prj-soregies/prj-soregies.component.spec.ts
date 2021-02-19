import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjSoregiesComponent } from './prj-soregies.component';

describe('PrjSoregiesComponent', () => {
  let component: PrjSoregiesComponent;
  let fixture: ComponentFixture<PrjSoregiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrjSoregiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjSoregiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
