import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { MESSAGES } from 'src/app/shared/constants/messages';
import { AccountsListService } from '../../services/accounts-list.service';
import { BanksListService } from '../../services//banks-list.service';
import { ActivatedRoute } from '@angular/router';
import { ReceiptsService } from 'src/app/services/receipts.service';

@Component({
  selector: 'app-edit-receiver',
  templateUrl: './edit-receiver.component.html',
  styleUrls: ['./edit-receiver.component.scss']
})
export class EditReceiverComponent implements OnInit {

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
  editReceiver = this.fb.group({
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
    private _receiptService: ReceiptsService,
    private _route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.getMessages();
    this.getBanks();
    this.getAccounts();
    console.log('_route ->', this._route.snapshot.params._id);
    this._receiptService.getReceiptById(this._route.snapshot.params._id).subscribe((result: any) => {
      console.log('result' , result.receiver); 
      this.editReceiver = new FormGroup({
        receiverRut: new FormControl(result.receiver.rut, Validators.required),
        receiverMail: new FormControl(result.receiver.mail, Validators.email),
        receiverBank: new FormControl(result.receiver.bank, Validators.required),
        receiverAccount: new FormControl(result.receiver.account_number, Validators.required),
        receiverName: new FormControl(result.receiver.name, Validators.required),
        receiverPhone: new FormControl(result.receiver.phone, Validators.required),
        receiverType: new FormControl(result.receiver.account_type.account_type, Validators.required),
      });
    });
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

  public editReceiverForm(){

  }
  //VALIDATIONS
  invalidFields(): boolean {
    if (this.editReceiver.invalid && this.isFormSubmited) {
      return true;
    } else {
      return false;
    }
  }
}
