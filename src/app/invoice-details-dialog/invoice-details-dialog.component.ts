/**
 * Title: invoice-details-dialog.component
 * Author: Chris Bohnet
 * Date: 4 September 2020
 * Description: Invoice details dialog (dialog box for displaying the details of an invoice)
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IService } from '../services.interface';

@Component({
  selector: 'app-home',
  templateUrl: './invoice-details-dialog.component.html',
  styleUrls: ['./invoice-details-dialog.component.css']
})
export class InvoiceDetailsDialogComponent implements OnInit {

  service: Array<IService> = [];
  invoice: number;
  todayDate: Date;

  constructor(private dialogRef: MatDialogRef<InvoiceDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.service = data.service;
    this.invoice = data.invoice;
    this.todayDate = data.todayDate;
  }

  ngOnInit(): void {
  }
}
