import { Component, OnInit } from '@angular/core';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-genders',
  templateUrl: './genders.component.html',
  styleUrls: [
    './genders.component.css',
    '../utils/utils.css'
  ]
})
export class GendersComponent {

  genders: Gender[] = [
    {value: 'masculino', viewValue: 'Masculino'},
    {value: 'feminino', viewValue: 'Feminino'},
    {value: 'outros', viewValue: 'Outros'}
  ];

 }
