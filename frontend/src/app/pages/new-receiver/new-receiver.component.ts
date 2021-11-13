import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import * as _ from 'lodash';
import { MESSAGES } from 'src/app/shared/constants/messages';
import { AccountsListService } from '../../services/accounts-list.service';
import { BanksListService } from '../../services//banks-list.service';
import { ReceiptsService } from 'src/app/services/receipts.service';
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
  public accountsList: any[] = [];

  // form
  newReceiver = this.fb.group({
    rut: ['', Validators.required],
    mail: ['', [Validators.required, Validators.email]],
    bank: [this.banksList[0], Validators.required],
    account_number: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    account_type: [this.accountsList[0], Validators.required],
  });

  public isFormSubmited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _banksList: BanksListService,
    private _accountList: AccountsListService,
    private _receiverService: ReceiptsService
  ) {}

  ngOnInit(): void {
    this.getMessages();
    this.getBanks();
    this.getAccounts();
    this.createReceiver();
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

  //CRUD METHODS
  public getBanks() {
    this._banksList.getBanksList().subscribe((data: any) => {
      this.banksList = data.banks;
    });
  }

  public getAccounts() {
    this._accountList.getAccounts().subscribe((data: any) => {
      this.accountsList = data.accounts;
      console.log('account lista ->', this.accountsList);
    });
  }

  public createReceiver() {
    this.isFormSubmited = true;
    if(this.newReceiver.invalid){
      return;
    }
    this._receiverService.createReceipt(this.newReceiver.value)
      .subscribe(resp => {
        console.log('respuesta ->', resp);
      })
  }


  //VALIDATIONS
  invalidFields(): boolean {
    if (this.newReceiver.invalid && this.isFormSubmited) {
      return true;
    } else {
      return false;
    }
  }
}
