import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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
