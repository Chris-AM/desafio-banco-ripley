import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { UnsubscribeHelper } from 'src/app/shared/unsubscribe.helper';
import { MESSAGES } from 'src/app/shared/constants/messages';
import * as _ from 'lodash';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent extends UnsubscribeHelper implements OnInit {
  public title: string = '';
  public names: string = '';
  public rut: string = '';
  public bank: string = '';
  public account: string = '';
  public type: string = '';
  public mount: string = '';
  public date: string = '';
  public page: number = 1;
  public pageSize: number = 5;
  public transactions: any[] = [];

  constructor(private trasactionService: TransactionsService) {
    super();
  }

  ngOnInit(): void {
    this.messages();
    this.getTransactions();
  }

  messages() {
    this.title = _.get(MESSAGES, 'HISTORY.TITLE');
    this.names = _.get(MESSAGES, 'HISTORY.NAMES');
    this.rut = _.get(MESSAGES, 'HISTORY.RUT');
    this.bank = _.get(MESSAGES, 'HISTORY.BANK');
    this.account = _.get(MESSAGES, 'HISTORY.ACCOUNT');
    this.type = _.get(MESSAGES, 'HISTORY.TYPE');
    this.mount = _.get(MESSAGES, 'HISTORY.MOUNT');
    this.date = _.get(MESSAGES, 'HISTORY.DATE');
  }
  public getTransactions() {
    return this.trasactionService.getTransactions().subscribe((data: any) => {
      this.transactions = data.transfers;
    });
  }
}
