import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logged = false;

  loginValues = {
    email: '',
    password: ''
  }
  constructor( private router: Router) { }

  loginHandle(loginForm:NgForm){
    console.log(loginForm)
    window.localStorage.setItem('user',JSON.stringify(loginForm.value))
    this.router.navigate(['/konto'])
    this.logged = true
  }
  ngOnInit(): void {
  }

}
