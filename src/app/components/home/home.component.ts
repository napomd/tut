import { Component, OnInit } from '@angular/core';
import { MainService } from './../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resMultiple : any;

  constructor(private mainservice : MainService) { }

  ngOnInit() {
    this.mainservice.getAll().subscribe(result =>{
      this.resMultiple = result;
    });
  }

}
