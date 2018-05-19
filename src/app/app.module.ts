import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators  } from '@angular/forms';  
import { CommonModule, DatePipe, CurrencyPipe  } from "@angular/common";
import { LoadingModule } from 'ngx-loading';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';


//Services
import { MainService } from './services/main.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule,
    LoadingModule,


    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },        
      //{ path: 'search', component: SearchComponent },
      { path: 'home', component: HomeComponent },
    ])



  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
