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
    console.log('url -->', this.url);
    return this._httpClient.get(this.url);
  }

  getReceiptById(_id: string) {
   const url = this.url + _id;
   console.log('receiver URL -->', url);
   return this._httpClient.get(url)
  }

  createReceipt(receipt: Receipts) {
    return this._httpClient.post(this.url, receipt);
  }

  updateReceipt(id: any, receipt: Receipts) {
    const url = this.url + id;
    console.log('update url -->', url);
    return this._httpClient.put(url, receipt)
  }

  deleteReceipt(id: any) {
    const url = this.url + id;
    console.log('delete url -->', url);
    return this._httpClient.delete(url)
  }
}
