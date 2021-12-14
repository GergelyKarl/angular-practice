import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { getApiService } from "src/app/core/services/api.service";
import { InputData } from "src/app/interfaces/InputData";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.scss"]
})
export class AddItemComponent implements OnInit {
  singleProduct: InputData;
  updateForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: getApiService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.updateForm = this.fb.group({
      id: null,
      name: "",
      net: null
    });
  }

  onSubmit(obj: any) {
    this.postService.postProduct(obj).subscribe();
    this.updateForm.reset();
  }
}
