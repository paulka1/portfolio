import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbPhotoComponent } from './ab-photo.component';

describe('AbPhotoComponent', () => {
  let component: AbPhotoComponent;
  let fixture: ComponentFixture<AbPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
