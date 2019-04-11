import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 userData:string
  constructor() { }
  // findAll():string[] {
  //   if(localStorage.getItem("loginList")!=null){
  //       return JSON.parse(localStorage.getItem("loginList"));
  //   }
  //   return null;
  // }
  // add(userData:string): void{
  //   if(localStorage.getItem("loginList") == null){
  //       let list:string[]=[];
  //       list.push(userData);
  //       localStorage.setItem("loginList",JSON.stringify(list));
  // }else{
  //        let list:string[]=JSON.parse(localStorage.getItem("loginList"))
  //       list.push(userData); 
  //       localStorage.setItem("loginList",JSON.stringify(list));
  // }
  // }
  // getItems(){
  //    this.userData=localStorage.getItem("userName")
  //    JSON.parse(this.userData);
  //    console.log(this.userData);
  // } 
}
