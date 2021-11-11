import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MESSAGES } from '../../constants/messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public bank: string = '';
  public newTransfer: string = '';
  public newReceipt: string = '';
  public history: string = '';

  constructor() { }

  ngOnInit(): void {
    this.getMessages();
  }

  public getMessages() {
    this.bank = _.get(MESSAGES, 'HEADER.BANK');
    this.newTransfer = _.get(MESSAGES, 'HEADER.NEW_TRANSFER');
    this.newReceipt = _.get(MESSAGES, 'HEADER.NEW_RECEIPT');
    this.history = _.get(MESSAGES, 'HEADER.HISTORY');
  }

}
