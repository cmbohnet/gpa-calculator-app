/**
 * Title: gpa.component.ts
 * Author: Chris Bohnet
 * Date: 11 August 2020
 * Description: gpa.component file
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
