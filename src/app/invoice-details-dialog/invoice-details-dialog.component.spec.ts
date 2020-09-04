/**
 * Title: invoice-details-dialog.component.spec
 * Author: Chris Bohnet
 * Date: 6 August 2020
 * Description: Invoice details dialog spec module
 */

 //imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailsDialogComponent } from './invoice-details-dialog.component';

describe('InvoiceDetailsDialogComponent', () => {
  let component: InvoiceDetailsDialogComponent;
  let fixture: ComponentFixture<InvoiceDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
