import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from 'src/model/User';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginForm: FormGroup;
  successStatus:any;
  user: User;
  constructor(private router: Router, private formbuilder: FormBuilder,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      passwrd: ['', Validators.required]
    })
  }

  login() {
    if(this.loginForm.valid) {
      this.router.navigate(['Home']);
      // this.loginService.login(this.loginForm.value).subscribe(res => {
      //     //this.successStatus = res;
      //     this.user = res;
      //     console.log(res);
      //     if (this.user.username !== null) {
      //       sessionStorage.setItem('user', this.user.username.toString())
      //     this.router.navigate(['Home']);
      //     }
      
      // });
      
        
    } else {
      alert('invalid credentials..');
    }
      
     }

     logout() {
       sessionStorage.removeItem('user');
       this.router.navigate(['Login']);
     }
}
