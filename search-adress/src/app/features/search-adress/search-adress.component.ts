import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-adress',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-adress.component.html',
  styleUrls: ['./search-adress.component.scss'],
})
export class SearchAdressComponent {
  public searchAdressForm = new FormGroup({
    cep: new FormControl(''),
    logradouro: new FormControl(''),
    complemento: new FormControl(''),
    bairro: new FormControl(''),
    localidade: new FormControl(''),
    ibge: new FormControl(''),
    ddd: new FormControl(''),
    siafi: new FormControl(''),
  });
}
