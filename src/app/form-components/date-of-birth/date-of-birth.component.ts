import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.component.html',
  styleUrls: [
    './date-of-birth.component.css',
    '../utils/utils.css'
  ]
})
export class DateOfBirthComponent {

  maxDate = new Date();

  dateOfBirth = new FormControl('', Validators.required);
 }
