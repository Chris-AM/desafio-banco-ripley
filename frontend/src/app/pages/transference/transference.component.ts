
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReceiptsService } from 'src/app/services/receipts.service';

@Component({
  selector: 'app-transference',
  templateUrl: './transference.component.html',
  styleUrls: ['./transference.component.scss'],
})
export class TransferenceComponent implements OnInit {
  public receiver: any;
  public receiptList: any[] = [];
  public filterReceipts: string = '';
  // list of banks
  public banksList: any[] = [];

  //list of accounts
  public accountsList: any[] = [];

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
    amount: ['', [ Validators.min(1)]],
  });

  constructor(
    private fb: FormBuilder,
    private _receiptsService: ReceiptsService,
    private _modalService: NgbModal,
    private _activatedRoute: ActivatedRoute,
    private _receiverService: ReceiptsService
  ) {}
  ngOnInit(): void {
    this.getReceipts();
    this.loadReaceiver();
    this.generateTransaction();
  }

  searchReceiver(searchTerm: string) {
    console.log('search receiver');
  }

  public getReceipts() {
    this._receiptsService.getReceipts().subscribe(
      (data: any) => {
        console.log('data -->', data);
        this.receiptList = data.receivers;
        console.log('this.receiptList -->', this.receiptList);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  openTransferModal(receiver: any, openModal: any) {
    this.receiver = receiver;
    console.log('receiver -->', receiver);
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
    //this.receiptList.push(receiver);
  }

  loadReaceiver() {}

  generateTransaction() {
    this.isFormSubmited = true;
    if (this.newTransfer.invalid) {
      return;
    }
    console.log('generating data-->', this.newTransfer.value);
  }

  //VALIDATIONS
  invalidFields(): boolean {
    if (this.newTransfer.get('amount')?.invalid && this.isFormSubmited) {
      return true;
    } else {
      return false;
    }
  }

  public closeModal() {
    this._modalService.dismissAll();
  }
}
