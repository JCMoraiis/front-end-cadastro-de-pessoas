import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-naturalness',
  templateUrl: './naturalness.component.html',
  styleUrls: [
    './naturalness.component.css',
    '../utils/utils.css'
  ]
})
export class NaturalnessComponent {

  naturalness = new FormControl('', Validators.minLength(2));

}
