import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.registrationForm = this.formBuilder.group({
      email:        ['', Validators.email ],
      naturalness:  ['', Validators.minLength(2)],
      nationality:  ['', Validators.minLength(2)],
    });
  }
 }
