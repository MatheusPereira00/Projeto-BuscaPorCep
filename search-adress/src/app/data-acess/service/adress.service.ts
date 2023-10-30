import { Injectable, inject } from '@angular/core';
import { Adress } from '../interface/adressInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdressService {
  private _http = inject(HttpClient);

  public findAddress(cep: string): Observable<Adress> {
    return this._http.get<Adress>(`localhost:8080/consulta-cep/${cep}/json`);
  }
}

// localhost:8080/consulta-cep${cep}
