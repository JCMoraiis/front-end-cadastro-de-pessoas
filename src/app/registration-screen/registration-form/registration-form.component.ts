import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Sex {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  genders: Sex[] = [
    {value: 'masculino', viewValue: 'Masculino'},
    {value: 'feminino', viewValue: 'Feminino'},
    {value: 'outros', viewValue: 'Outros'}
  ];

  registrationForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  maxDate = new Date();

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.registrationForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      email: ['', Validators.email ],
      dateOfBirth: ['', Validators.required]
    });
  }
 }
