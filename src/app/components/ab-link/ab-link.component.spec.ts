import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbLinkComponent } from './ab-link.component';

describe('AbLinkComponent', () => {
  let component: AbLinkComponent;
  let fixture: ComponentFixture<AbLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
