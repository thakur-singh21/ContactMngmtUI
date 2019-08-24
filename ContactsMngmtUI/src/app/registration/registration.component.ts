import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registationForm: FormGroup;
  constructor( private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registationForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      userName:['', Validators.required],
      passwrd:['', Validators.required]
    })
  }

  addUser() {
      if (this.registationForm.valid) {
        alert('User Added');
      }
  }
}
