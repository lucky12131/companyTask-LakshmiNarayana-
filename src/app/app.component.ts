import { Component } from '@angular/core';
import { User } from './User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userInformation:User[]=[];
  addUser(form){
   console.log(form.value);
  }


  
}
