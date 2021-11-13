import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BanksListService {
  constructor(private _httpClient: HttpClient) {}

  getBanksList() {
    let banks = _.get(environment, 'BANK_LIST');
    return this._httpClient.get(banks)
      .pipe(map(data => {
        return data;
      }))
  }
}
