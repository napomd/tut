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
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';


//Services
import { MainService } from './services/main.service';
import { LoginService } from './services/login.service';
import { SettingsService } from './services/settings.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    LoginComponent,
    MainComponent,
    SettingsComponent
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
      //{ path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', component: MainComponent },
      { path: 'home', component: MainComponent }
    ])



  ],
  providers: [
    MainService,
    LoginService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
