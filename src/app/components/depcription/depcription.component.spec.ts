import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepcriptionComponent } from './depcription.component';

describe('DepcriptionComponent', () => {
  let component: DepcriptionComponent;
  let fixture: ComponentFixture<DepcriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepcriptionComponent]
    });
    fixture = TestBed.createComponent(DepcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
