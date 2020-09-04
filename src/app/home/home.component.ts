/**
 * Title: home.component.ts
 * Author: Chris Bohnet
 * Date: 4 September 2020
 * Description: home.component file
 */
import { Component, OnInit, NgModule } from '@angular/core';
import { IService } from '../services.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDetailsDialogComponent } from '../invoice-details-dialog/invoice-details-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {

  servicesForm: FormGroup;
  parts: 0;
  labor: 0;
  services: Array<IService> = [];
  service: IService;
  checkbox_list = [];

  constructor(private fb: FormBuilder,private dialog: MatDialog) {
    this.checkbox_list = [
      {
        name: "Password Reset ($39.99)",
        invoiceItem: "Password Reset",
        cost: 39.99,
        checked: false
      }, {
        name: "Spyware Removal ($99.99)",
        invoiceItem: "Spyware Removal",
        cost: 99.99,
        checked: false
      }, {
        name: "RAM Upgrade ($129.99)",
        invoiceItem: "RAM Upgrade",
        cost: 129.99,
        checked: false
      }, {
        name: "Software Installation ($49.99)",
        invoiceItem: "Software Installation",
        cost: 49.99,
        checked: false
      }, {
        name: "Tune-up ($89.99)",
        invoiceItem: "Tune-up",
        cost: 89.99,
        checked: false
      }, {
        name: "Keyboard Cleaning ($45.00)",
        invoiceItem: "Keyboard Cleaning",
        cost: 45.00,
        checked: false
      }, {
        name: "Disk Clean-up ($149.99)",
        invoiceItem: "Disk Clean-up",
        cost: 149.99,
        checked: false
      }
    ]

  }

  list_change(e){
    if (e.checked) {
       e.checked = false;
    }
    else if (!e.checked){
       e.checked = true;
     }
  }

  ngOnInit(): void {
    this.servicesForm = this.fb.group({
      parts: [''],
      labor: ['']
    })
  }

  get form() { return this.servicesForm.controls; }

  calculateResults() {
    let invoiceTotal: number = 0;
    let todayDate : Date = new Date();


    for (let value of Object.values(this.checkbox_list)) {
      console.log(value.checked, value.name);
       if (value.checked) {
           console.log(value.checked + value.name);
           console.log('calculate results says true');
           invoiceTotal += value.cost;
           this.services.push({
              name: value.invoiceItem,
              cost: value.cost
           });
       }
    }

    if (this.form.parts.value) {
      invoiceTotal += this.form.parts.value;
      this.services.push({
        name: 'Parts',
        cost: this.form.parts.value
      });
    }

    if (this.form.labor.value) {
      invoiceTotal += this.form.labor.value * 50;
      this.services.push({
        name: 'Labor',
        cost: this.form.labor.value * 50
      });
    }

    const dialogRef = this.dialog.open(InvoiceDetailsDialogComponent, {
      data: {
        service: this.services,
        invoice: invoiceTotal,
        todayDate: todayDate

      },
      disableClose: true,
      width: '800px'
    })

    console.log(invoiceTotal);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
          this.services = [];
      }
    });
  }

}
