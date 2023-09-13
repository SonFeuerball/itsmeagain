import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftrightComponent } from './leftright.component';

describe('LeftrightComponent', () => {
  let component: LeftrightComponent;
  let fixture: ComponentFixture<LeftrightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftrightComponent]
    });
    fixture = TestBed.createComponent(LeftrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
