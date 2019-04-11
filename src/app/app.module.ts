import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { SuccessComponent } from './success/success.component';
import { RouterModule } from '@angular/router';

 
@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    LoginPageComponent,
   
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component:SignUpFormComponent
      },
      {
        path:'success/:name',
        component:SuccessComponent
      },
      {
        path:'login',
        component:LoginPageComponent
      }
    ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
