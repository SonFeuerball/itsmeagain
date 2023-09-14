import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NothinghereComponent } from './nothinghere.component';

describe('NothinghereComponent', () => {
  let component: NothinghereComponent;
  let fixture: ComponentFixture<NothinghereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NothinghereComponent]
    });
    fixture = TestBed.createComponent(NothinghereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
