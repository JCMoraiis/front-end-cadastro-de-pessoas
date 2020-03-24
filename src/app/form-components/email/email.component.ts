import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: [
    './email.component.css',
    '../utils/utils.css'
  ]
})
export class EmailComponent {

  email = new FormControl('', Validators.email);

}
