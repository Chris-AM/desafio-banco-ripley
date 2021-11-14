import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private baseUrl = _.get(environment, 'BASE_URL');
  private transferUrl = _.get(environment, 'TRANSFER_LIST');
  private url = this.baseUrl + this.transferUrl;

  constructor( private _httpClient: HttpClient) { }

  getTransactions() {
    console.log('transfer url ===> ',this.url);
    return this._httpClient.get(this.url);
  }


}
