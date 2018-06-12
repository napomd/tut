import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Input('dataCtrl') dataCtrl: any;

  credentials: any = {
    'username' : '',
    'password' : '',
    'admin' : false
  };
  success: boolean = false;

  loading: boolean = false;
  logfail: boolean = false;

  constructor(private loginservice : LoginService) { }

  ngOnInit() {
    
  }

  login(){
    this.loading = true;
    this.loginservice.getLogin(this.credentials).subscribe(res => {
      console.log(res);
      if (res.success){
        this.credentials.admin = res.admin;
        localStorage.setItem("credentials", JSON.stringify(this.credentials));
        console.log('dave', JSON.parse(localStorage.getItem("credentials")));
        this.resetValues();
        this.dataCtrl.mode.login = false;
        this.dataCtrl.mode.home = true;
      }else{
        console.log('not authorised');
        localStorage.setItem("credentials", JSON.stringify({'username':'','password':'','admin':false}));
        this.logfail = true;
        this.resetValues();
      }
    });
  }

  resetValues(){
    this.credentials.username = '';
    this.credentials.password = '';
    this.credentials.admin = false;
    this.loading = false;
  }



}
