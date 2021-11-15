import { Injectable } from '@angular/core';
import { AccountList } from 'src/app/shared/interfaces/accountListInterface';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AccountsListService {

  constructor( private _httpClient: HttpClient) { }
  public baseUrl = _.get(environment, 'BASE_URL');
  public accountsUrl = _.get(environment, 'ACCOUNT_LIST');
  public url = this.baseUrl + this.accountsUrl;

  getAccounts() {
    return this._httpClient.get(this.url);
  }
  getAccount(id: string) {
    const url = this.url + id;
    return this._httpClient.get(url);
  }
}
