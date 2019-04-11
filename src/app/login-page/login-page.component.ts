import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username;
  validUser = false;
  constructor(private route: Router) { }
  userLogin= new FormGroup({
    userName: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('',[
      Validators.required
    ])

    
  })
  ngOnInit() {
  }
login(){
 
    if(this.userLogin.get('userName') && this.userLogin.get('password')) {
    let user = this.userLogin.get('userName').value;
    var curUser = JSON.parse(localStorage.getItem(user));
    var pass = this.userLogin.get('password').value;
    }
    console.log(curUser);
    // console.log(curUser['userName']);
    if(curUser) {
      if(curUser['password'] === pass) {
      this.route.navigate(['/success',curUser['userName']]);
      this.validUser = true;
      }
    }
    else {
      this.route.navigate(['/login']);
      alert("Invalid user or password");
    }
    
  }
}
