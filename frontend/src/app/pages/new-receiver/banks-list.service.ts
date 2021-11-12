import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { ENDPOINTS } from 'src/app/shared/constants/endpoints';
import { BankList } from 'src/app/shared/interfaces/bankListInterface';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BanksListService {
  constructor(private _httpClient: HttpClient) {}

  getBanksList() {
    let banks = _.get(ENDPOINTS, 'BANK_LIST');
    return this._httpClient.get(banks)
      .pipe(map(data => {
        return data;
      }))
  }
}
