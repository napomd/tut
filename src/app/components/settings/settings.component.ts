import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input('dataCtrl') dataCtrl: any;

  credentials: any = JSON.parse(localStorage.getItem("credentials"));
  postbody: any = {};
  settings: any = [];  
  loading: boolean = true;

  constructor(private service : SettingsService) { }

  ngOnInit() {
    this.service.getSettings(this.credentials).subscribe(result => {
      console.log(result);
      if (!result.success){
        if (result.length > 0){
          this.settings = result[0];
        }else{
          this.dataCtrl.mode.control = false;
          this.dataCtrl.mode.login = true;
          console.log('thisssssss');
        }
        
      }else{
        console.log('not authorized');
        this.dataCtrl.mode.control = false;
        this.dataCtrl.mode.login = true;
      }
      this.loading = false;
    });
  }

  process(val){
    this.loading = true;
    this.settings.active = val;
    this.postbody.credentials = this.credentials;
    this.postbody.settings = this.settings;
    console.log(this.postbody);
    this.loading = true;
    this.service.updateSettings(this.postbody).subscribe(result => {
      this.loading = false;
      this.ngOnInit();
    });
  }

}
