import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CartComponent} from './cart.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {GetAPIService} from '../../core/get-api.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent], imports: [HttpClientTestingModule], providers: [GetAPIService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
