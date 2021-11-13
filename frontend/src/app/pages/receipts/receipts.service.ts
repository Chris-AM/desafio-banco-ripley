import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from 'src/app/shared/constants/endpoints';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ReceiptsService {

  constructor(private _httpClient: HttpClient) { }

  getReceipts() {
    let baseUrl = _.get(ENDPOINTS, 'BASE_URL');
    let receiptsUrl = _.get(ENDPOINTS, 'RECEIVER_LIST');
    let url = baseUrl + receiptsUrl;
    console.log(url);
    return this._httpClient.get(url);
  }
}
