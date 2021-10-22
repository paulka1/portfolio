import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjScoutComponent } from './prj-scout.component';

describe('PrjScoutComponent', () => {
  let component: PrjScoutComponent;
  let fixture: ComponentFixture<PrjScoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrjScoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjScoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
