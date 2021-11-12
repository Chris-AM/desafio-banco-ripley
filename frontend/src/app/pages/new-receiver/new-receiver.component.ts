import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { MESSAGES } from 'src/app/shared/constants/messages';
import { BankList } from 'src/app/shared/interfaces/bankListInterface';
import { BanksListService } from './banks-list.service';
@Component({
  selector: 'app-new-receiver',
  templateUrl: './new-receiver.component.html',
  styleUrls: ['./new-receiver.component.scss'],
})
export class NewReceiverComponent implements OnInit {
 //messages
  public title: string = '';
  public name: string = '';
  public mail: string = '';
  public bank: string = '';
  public type: string = '';
  public rut: string = '';
  public account: string = '';
  public phone: string = '';
  public accept: string = '';

  // list of banks
  public banksList: any[] = [];

  // form
  newReceiver = new FormGroup({
    receiverRut: new FormControl(''),
    receiverMail: new FormControl(''),
    receiverBank: new FormControl(''),
    receiverAccount: new FormControl(''),
    receiverName: new FormControl(''),
    receiverPhone: new FormControl(''),
    receiverType: new FormControl(''),
  });

  constructor(
    private _banksList: BanksListService
  ) {}


  ngOnInit(): void {
    this.getMessages();
    this.getBanks();
  }

  public getMessages() {
    this.title = _.get(MESSAGES, 'NEW_RECEIVER.TITLE');
    this.name = _.get(MESSAGES, 'NEW_RECEIVER.NAME');
    this.mail = _.get(MESSAGES, 'NEW_RECEIVER.MAIL');
    this.bank = _.get(MESSAGES, 'NEW_RECEIVER.BANK');
    this.type = _.get(MESSAGES, 'NEW_RECEIVER.TYPE');
    this.rut = _.get(MESSAGES, 'NEW_RECEIVER.RUT');
    this.account = _.get(MESSAGES, 'NEW_RECEIVER.ACCOUNT');
    this.phone = _.get(MESSAGES, 'NEW_RECEIVER.PHONE');
    this.accept = _.get(MESSAGES, 'NEW_RECEIVER.ACCEPT');
  }

  public getBanks() {
    this._banksList.getBanksList()
      .subscribe((data:any) => {
        this.banksList = data.banks;
      })
  };
}
