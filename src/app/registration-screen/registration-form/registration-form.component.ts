import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

interface Sex {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
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
      email:        ['', Validators.email ],
      dateOfBirth:  ['', Validators.required],
      naturalness:  ['', Validators.minLength(2)],
      nationality:  ['', Validators.minLength(2)],
      CPF:  ['',
        [
        Validators.required,
        Validators.pattern(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/)
        ]
      ]
    });
  }
 }
