import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { MESSAGES } from 'src/app/shared/constants/messages';
import { AccountsListService } from '../../services/accounts-list.service';
import { BanksListService } from '../../services//banks-list.service';
import { ReceiptsService } from 'src/app/services/receipts.service';
import { UnsubscribeHelper } from 'src/app/shared/unsubscribe.helper';
@Component({
  selector: 'app-new-receiver',
  templateUrl: './edit-receiver.component.html',
  styleUrls: ['./edit-receiver.component.scss'],
})
export class EditReceiverComponent extends UnsubscribeHelper implements OnInit {
  //messages
  public title: string = '';
  public name: string = '';
  public mail: string = '';
  public bank: string = '';
  public type: string = '';
  public rut: string = '';
  public account: string = '';
  public phone: string = '';
  public update: string = '';
  public missingFields: string = '';
  public updated: string = '';
  public message: boolean = false;

  // list of banks
  public banksList: any[] = [];

  //list of accounts
  public accountsList: any[] = [];

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
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _banksList: BanksListService,
    private _accountList: AccountsListService,
    private _receiverService: ReceiptsService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getMessages();
    this.getBanks();
    this.getAccounts();
    this.loadReaceiver();
  }

  public getMessages() {
    this.title = _.get(MESSAGES, 'RECEIVER.');
    this.name = _.get(MESSAGES, 'RECEIVER.NAME');
    this.mail = _.get(MESSAGES, 'RECEIVER.MAIL');
    this.bank = _.get(MESSAGES, 'RECEIVER.BANK');
    this.type = _.get(MESSAGES, 'RECEIVER.TYPE');
    this.rut = _.get(MESSAGES, 'RECEIVER.RUT');
    this.account = _.get(MESSAGES, 'RECEIVER.ACCOUNT');
    this.phone = _.get(MESSAGES, 'RECEIVER.PHONE');
    this.update = _.get(MESSAGES, 'RECEIVER.UPDATE');
    this.missingFields = _.get(MESSAGES, 'RECEIVER.MISSING_FIELDS');
    this.updated = _.get(MESSAGES, 'RECEIVER.UPDATED');
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
    });
  }

  public editReceiverForm() {
    const id = this._activatedRoute.snapshot.params._id
    this._receiverService.updateReceipt(id, this.editReceiver.value).subscribe(
      res => {
        this.message=true;
      }
    );
  }

  loadReaceiver() {
    const id = this._activatedRoute.snapshot.params._id
    this._receiverService.getReceiptById(id).subscribe((data: any) => {
      this.editReceiver.patchValue({
        rut: data.receiver.rut,
        mail: data.receiver.mail,
        bank: data.receiver.bank,
        account_number: data.receiver.account_number,
        name: data.receiver.name,
        phone: data.receiver.phone,
        account_type: data.receiver.account_type.account_type,
      });
    });
  }
 
  //VALIDATIONS
  invalidFields(): boolean {
    if (this.editReceiver.invalid && this.isFormSubmited) {
      return true;
    } else {
      return false;
    }
  }

  public removeMessage() {
    this.message = false;
    this._router.navigate(['/dashboard/destinatarios']);
  }
}
