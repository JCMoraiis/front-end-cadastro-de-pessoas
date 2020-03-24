import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: 'name.component.html',
  styleUrls: ['name.component.css']
})
export class NameComponent {

  name = new FormControl('',
    [
      Validators.required,
      Validators.minLength(8)
    ]
  );
 }
