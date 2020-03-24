import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: [
    './nationality.component.css',
    '../utils/utils.css'
  ]
})
export class NationalityComponent {

  nationality = new FormControl('', Validators.minLength(2));

}
