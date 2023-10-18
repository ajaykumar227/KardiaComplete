import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EnrollDataService } from 'src/app/shared/enroll-data.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {

  hide: boolean = true;
  visiable: boolean = true;


  // enrollForm: FormGroup = new FormGroup({
  //   fullName: new FormGroup({
  //     firstName: new FormControl("", [Validators.required]),
  //     lastName: new FormControl("", [Validators.required])
  //   }),
  //   dob: new FormControl("", [Validators.required]),
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   password: new FormControl("", [Validators.required]),
  //   confirmPassword: new FormControl("", [Validators.required]),
  //   atrial: new FormControl(false, [Validators.required]),
  //   bloodPressure: new FormControl(false, [Validators.required]),
  //   ad: new FormControl(false, [Validators.required]),
  //   terms: new FormControl(false, [Validators.required])
  // });

  constructor(public enrollDataService: EnrollDataService, public router: Router, public fb: FormBuilder) { }


    enrollForm: FormGroup = this.fb.group({
    fullName: this.fb.group({
      firstName: [" ", [Validators.required]],
      lastName: [" ", [Validators.required]]
    }),
    dob: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
    confirmPassword: ["", [Validators.required]],
    atrial: [false, [Validators.required]],
    bloodPressure: [false, [Validators.required]],
    ad: [false, [Validators.required]],
    terms: [false, [Validators.required]]
    });

  onSubmit() {
    if (this.enrollForm.valid) {
      this.enrollDataService.getEnrollData(this.enrollForm.value);
    }
    this.router.navigate(["/profilesetup"]);
  }

  onEyeClick(){
this.hide = !this.hide;
this.visiable = !this.visiable;
  }
}
