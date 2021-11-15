import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReceiptsService } from 'src/app/services/receipts.service';
import { TransactionsService } from 'src/app/services/transactions.service';
import { UnsubscribeHelper } from 'src/app/shared/unsubscribe.helper';

@Component({
  selector: 'app-transference',
  templateUrl: './transference.component.html',
  styleUrls: ['./transference.component.scss'],
})
export class TransferenceComponent extends UnsubscribeHelper implements OnInit {
  public receiver: any;
  public receiptList: any[] = [];
  public filterReceipts: string = '';
  public message: boolean = false;
  //needed for pagination
  public page: number = 1;
  public pageSize: number = 5;
  // list of banks
  public banksList: any[] = [];

  //list of accounts
  public accountsList: any[] = [];
  public idAccountType: string = '';

  public isFormSubmited: boolean = false;

  //form
  newTransfer = this.fb.group({
    rut: ['', Validators.required],
    mail: ['', [Validators.required, Validators.email]],
    bank: [this.banksList[0], Validators.required],
    account_number: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    account_type: [this.accountsList[0], Validators.required],
    amount: ['', [Validators.min(1), Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private _receiptsService: ReceiptsService,
    private _modalService: NgbModal,
    private _transactionService: TransactionsService
  ) {
    super();
  }
  ngOnInit(): void {
    this.getReceipts();
    //this.generateTransaction();
  }

  public getReceipts() {
    this._receiptsService.getReceipts().subscribe(
      (data: any) => {
        this.receiptList = data.receivers;
      },
      (error: any) => {
        throw new Error("error");
        
      }
    );
  }

  openTransferModal(receiver: any, openModal: any) {
    this.receiver = receiver;
    this._modalService.open(openModal);
    this.newTransfer.patchValue({
      rut: receiver.rut,
      mail: receiver.mail,
      bank: receiver.bank,
      account_number: receiver.account_number,
      name: receiver.name,
      phone: receiver.phone,
      account_type: receiver.account_type.account_type,
      amount: receiver.amount,
    });
  }

  generateTransaction(receiver: any) {
    this.isFormSubmited = true;
    if (this.newTransfer.invalid) {
      return;
    }
    const newTransaction = {
      receiver: receiver._id,
      account: receiver.account_type._id,
      ammount: this.newTransfer.value.amount
    };
    this._transactionService
      .createTransaction(newTransaction)
      .subscribe((resp) => {
       this.message = true;
      }); 
  }

  //VALIDATIONS
  invalidFields(): boolean {
    if (this.newTransfer.invalid && this.isFormSubmited) {
      return true;
    } else {
      return false;
    }
  }

  public closeModal() {
    this._modalService.dismissAll();
  }
}
