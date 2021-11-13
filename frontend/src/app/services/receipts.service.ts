import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash';
import { Receipts } from '../shared/interfaces/receiptsInterface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReceiptsService {
  private baseUrl = _.get(environment, 'BASE_URL');
  private receiptsUrl = _.get(environment, 'RECEIVER_LIST');
  private url = this.baseUrl + this.receiptsUrl;

  constructor(private _httpClient: HttpClient) {}

  getReceipts() {
    console.log(this.url);
    return this._httpClient.get(this.url);
  }

  getReceiptById(_id: any) {
    return this._httpClient.get(this.url + _id);
  }

  createReceipt(receipt: Receipts) {
    return this._httpClient.post(this.url, receipt)
  }


}
