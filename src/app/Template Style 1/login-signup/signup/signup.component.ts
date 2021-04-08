import { Component, OnInit } from '@angular/core';
import {faArrowLeft, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  page = 1;

  backIcon = faArrowLeft;
  editIcon = faEdit;
  deleteIcon = faTrash;

  constructor(private formBuilder: FormBuilder) { }

  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      businessName: ['', Validators.required],
      lineOfBusiness: ['Manufacturing'],
    });
    this.secondFormGroup = this.formBuilder.group({
      buildingName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      location: ['', Validators.required],
      street: [''],
      county: ['', Validators.required],
      town: ['', Validators.required],
    });
  }

  onClickNext(valid: boolean): void {
    // console.log('hI');
    if (valid) {
      this.page += 1;
    }
    console.log(this.page);
  }

}
