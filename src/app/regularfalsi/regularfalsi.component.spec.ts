import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularfalsiComponent } from './regularfalsi.component';

describe('RegularfalsiComponent', () => {
  let component: RegularfalsiComponent;
  let fixture: ComponentFixture<RegularfalsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularfalsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularfalsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
