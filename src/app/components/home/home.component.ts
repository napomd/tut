import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from './../../services/main.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @Input('dataCtrl') dataCtrl: any;

  resMultiple : any;
  imagePath: any;
  loading: boolean = true;
  credentials: any = JSON.parse(localStorage.getItem("credentials"));
  postbody: any = {};
  





  constructor(private mainservice : MainService,
              private _sanitizer: DomSanitizer,
              private router: Router, 
              private  route: ActivatedRoute) { }

  ngOnInit() {
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");

    this.mainservice.getImages(this.credentials).subscribe(result =>{
      if (!result.success){
        if (result.length > 0){
          this.resMultiple = result;
          this.resMultiple.forEach(e => {
            e.value.payload.imgdata = this._sanitizer.bypassSecurityTrustUrl(`data:image/jpg;base64, ${e.value.payload.imgdata}`);  
          });
          console.log(this.resMultiple);
          this.dataCtrl.mode.home = true;
        }else{
          this.dataCtrl.mode.home = false;
          this.dataCtrl.mode.login = true;
          console.log('thisssssss');
        }
        
      }else{
        console.log('not authorized');
        this.dataCtrl.mode.home = false;
        this.dataCtrl.mode.login = true;
      }
      this.loading = false;
    });
  }

  delete(picData){
    this.loading = true;
    this.postbody.credentials = this.credentials;
    this.postbody.docID = picData.id;
    
    this.mainservice.updateImage(this.postbody).subscribe(result => {
      this.loading =false;
      this.ngOnInit();
    });
  }

}
