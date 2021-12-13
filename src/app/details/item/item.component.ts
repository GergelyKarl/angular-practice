import { Component, OnInit } from '@angular/core';
import { getApiService } from '../../core/api.service';
import { InputData } from '../../interfaces/InputData';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { productUrl } from '../../../environments/environment';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  singleProduct: InputData;
  param: unknown;
  updateForm: FormGroup;

  constructor(
    private productService: getApiService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private postService: getApiService
  ) {}

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id');

    this.productService
      .getSingleProduct(`${productUrl}/${this.param}`)
      .subscribe((productItem: InputData) => {
        this.singleProduct = productItem;
      });
    this.initializeForm();
  }

  initializeForm(): void {
    this.updateForm = this.fb.group({
      id: null,
      name: '',
      net: null,
    });
  }

  onSubmit(obj: any) {
    this.postService.postProduct(obj).subscribe();
  }
}
