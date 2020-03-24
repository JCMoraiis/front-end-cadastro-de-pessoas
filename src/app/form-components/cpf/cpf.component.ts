import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: [
    './cpf.component.css',
    '../utils/utils.css'
  ]
})
export class CpfComponent {

  cpf = new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/)
    ]
  );

}
