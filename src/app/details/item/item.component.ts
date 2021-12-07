import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../../core/get-api.service';
import { InputData } from '../../datagird/datagrid/datagrid.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  singleProduct: InputData;
  productUrl: string = 'http://localhost:3000/products';
  param: any;
  updateForm: FormGroup;

  constructor(
    private productService: GetAPIService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private postService: GetAPIService
  ) {}

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id');

    this.productService
      .getSingleProduct(`${this.productUrl}/${this.param}`)
      .subscribe((prod: InputData) => {
        this.singleProduct = prod;
      });
    this.initializeForm();
  }

  initializeForm(): void {
    this.updateForm = this.fb.group({
      id: null,
      name: '',
      net: null,
      vat: null,
    });
  }

  onSubmit(obj: any) {
    let newItem: any = this.updateForm;

    this.postService.postProduct(obj).subscribe((data) => console.log(data));
  }
}
