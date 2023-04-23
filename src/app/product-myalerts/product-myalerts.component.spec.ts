import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMyalertsComponent } from './product-myalerts.component';

describe('ProductMyalertsComponent', () => {
  let component: ProductMyalertsComponent;
  let fixture: ComponentFixture<ProductMyalertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMyalertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMyalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
