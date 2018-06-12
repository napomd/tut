import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input('dataCtrl') dataCtrl: any;

  PostalAddress = "1003 Temple Court,169 Jeppe Street,Johannesburg,2001";
  PhysicalAddress = "1003 Temple Court,169 Jeppe Street,Johannesburg,2001";
  constructor() { }

  ngOnInit() {
    this.PostalAddress = this.PostalAddress.replace(/\,/gi, '<br/>');        
    this.PhysicalAddress = this.PhysicalAddress.replace(/\,/gi, '<br/>');
  }

}
