import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductItemComponent} from './product-item.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {getApiService} from '../../../core/services/api.service';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemComponent], imports: [HttpClientTestingModule], providers: [getApiService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
