import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DatagridComponent} from './datagrid.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {getApiService} from '../../core/api.service';
import {ReactiveFormsModule} from '@angular/forms';

describe('DatagridComponent', () => {
  let component: DatagridComponent;
  let fixture: ComponentFixture<DatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatagridComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [getApiService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
