import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
   userDetails = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      console.log(params);
      var user=params.get('name');
      console.log(user);
      this.userDetails = JSON.parse(localStorage.getItem(user));
      console.log(this.userDetails);

  })

  }
}
