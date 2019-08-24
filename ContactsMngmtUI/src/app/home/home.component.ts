import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser=sessionStorage.getItem('user');
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
}
