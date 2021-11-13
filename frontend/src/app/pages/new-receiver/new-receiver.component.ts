import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { MESSAGES } from 'src/app/shared/constants/messages';
import { AccountList } from 'src/app/shared/interfaces/accountListInterface';
import { BankList } from 'src/app/shared/interfaces/bankListInterface';
import { AccountsListService } from './accounts-list.service';
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

  //list of accounts
  public accountsList:any[] = [];

  // form
  newReceiver = new FormGroup({
    receiverRut: new FormControl('', Validators.required),
    receiverMail: new FormControl('',[ Validators.required, Validators.email]),
    receiverBank: new FormControl(this.banksList[0], Validators.required),
    receiverAccount: new FormControl(this.accountsList[0], Validators.required),
    receiverName: new FormControl('', Validators.required),
    receiverPhone: new FormControl('', Validators.required),
    receiverType: new FormControl('', Validators.required),
  });

  constructor(
    private _banksList: BanksListService,
    private _accountList: AccountsListService,
  ) { }


  ngOnInit(): void {
    this.getMessages();
    this.getBanks();
    this.getAccounts();
  }

  public getMessages() {
    this.title = _.get(MESSAGES, 'RECEIVER.TITLE');
    this.name = _.get(MESSAGES, 'RECEIVER.NAME');
    this.mail = _.get(MESSAGES, 'RECEIVER.MAIL');
    this.bank = _.get(MESSAGES, 'RECEIVER.BANK');
    this.type = _.get(MESSAGES, 'RECEIVER.TYPE');
    this.rut = _.get(MESSAGES, 'RECEIVER.RUT');
    this.account = _.get(MESSAGES, 'RECEIVER.ACCOUNT');
    this.phone = _.get(MESSAGES, 'RECEIVER.PHONE');
    this.accept = _.get(MESSAGES, 'RECEIVER.ACCEPT');
  }

  public getBanks() {
    this._banksList.getBanksList()
      .subscribe((data:any) => {
        this.banksList = data.banks;
      })
  };

  public getAccounts() {
   this._accountList.getAccounts()
    .subscribe((data:any) => {
      this.accountsList = data.accounts;
      console.log('account lista ->', this.accountsList);
    } );
  }
}
