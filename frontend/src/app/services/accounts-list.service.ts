import { Injectable } from '@angular/core';
import { AccountList } from 'src/app/shared/interfaces/accountListInterface';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountsListService {

  constructor( private _httpClient: HttpClient) { }

  getAccounts() {
    let baseUrl = _.get(environment, 'BASE_URL');
    let accountsUrl = _.get(environment, 'ACCOUNT_LIST');
    let url = baseUrl + accountsUrl;
    console.log(url);
    return this._httpClient.get(url);
  }
  getAccount(id: number) {
  }
}
