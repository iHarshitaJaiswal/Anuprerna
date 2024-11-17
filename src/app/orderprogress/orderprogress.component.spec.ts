import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderprogressComponent } from './orderprogress.component';

describe('OrderprogressComponent', () => {
  let component: OrderprogressComponent;
  let fixture: ComponentFixture<OrderprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderprogressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
