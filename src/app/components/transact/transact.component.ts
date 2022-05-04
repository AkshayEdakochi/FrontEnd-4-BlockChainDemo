import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent implements OnInit {

  transactForm : FormGroup
  constructor() { }

  ngOnInit(): void {
    this.transactForm = new FormGroup({
      address : new  FormControl('',Validators.required),
      amount : new FormControl('', Validators.required)
    });
  }

}
