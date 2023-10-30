import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdressService } from 'src/app/data-acess/service/adress.service';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-search-adress',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  templateUrl: './search-adress.component.html',
  styleUrls: ['./search-adress.component.scss'],
})
export class SearchAdressComponent implements OnInit {
  private _adressService = inject(AdressService);
  public form!: FormGroup;

  ngOnInit(): void {
    this.searchAdressForm();
  }

  public searchAdressForm(): void {
    this.form = new FormGroup({
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

  public getFindAddress(): void {
    const cep = this.form.get('cep')?.value;
    if (this.form.get('cep')?.valid) {
      this._adressService.findAddress(cep).subscribe((cep) => {
        this.form.patchValue({
          logradouro: cep.logradouro,
          complemento: cep.complemento,
          bairro: cep.bairro,
          localidade: cep.localidade,
          ibge: cep.ibge,
          ddd: cep.ddd,
          siafi: cep.siafi,
        });
      });
    }
  }
}
