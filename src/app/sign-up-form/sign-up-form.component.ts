import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import {Validators,FormGroup,FormBuilder, FormControl} from '@angular/forms'
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { UniqueUser } from './uniqueUser.validators';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  // userInformation:User[]=[];
  // addUser(form){
  // var user:User;
  // user=form.value;
  // this.userInformation.push(user);
  // }
  
  //data:string[];
  userData:string;
  unique: boolean;
  match: boolean=false;
  constructor(private user:UserServiceService,private formBulider:FormBuilder,private route: Router) { }
  userForm= new FormGroup({
     userName:new FormControl('',[
       Validators.required,
       UniqueUser.shouldBeUnique
      ]),
     name:new FormControl('',[
       Validators.required

     ]),
     email: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
     ]),
     password: new FormControl('',[
       Validators.required,
       Validators.pattern("[a-z]+[@#$%^&*]"),
       Validators.minLength(8)
     ]),
     confirmPassword: new FormControl('',[
       Validators.required,
     ]),
     phoneNumber: new FormControl('',[
       Validators.required
      
     ]) ,
     address: new FormControl('',[
       Validators.required,
       Validators.minLength(30)
     ])
  })
  ngOnInit() {
    // this.userForm=this.fromBulider.group({
    //   userData:['',[Validators.required]]
    // });
    // this.data=this.user.findAll();
  }
  // add(): void{
  //   this.user.add(this.userForm.value.userData)
  //   this.data=this.user.findAll();

     
  // }
  onSubmit(){
  //  console.log(this.userForm.value);
  
    let user = this.userForm.value;
        
    localStorage.setItem(this.userForm.get('userName').value,JSON.stringify(user));
    
    //console.log("user "+localStorage.getItem(temp));
    
     this.route.navigate(['/login']);
 }




 
}
