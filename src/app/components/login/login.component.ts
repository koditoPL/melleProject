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
  loading = false;
  errorText = '';
  usersList = [
    {
      id: 1,
      email: 'rekrutacja@melle.com',
      password: 'rekrutacja'
    },
    {
      id: 2,
      email: 'biuro@test.pl',
      password: 'test1234'
    },
    {
      id: 3,
      email: 'kontakt@test2.pl',
      password: 'testowe987'
    },
  ]
  loginValues = {
    email: '',
    password: ''
  }
  constructor( private router: Router) { }

  loginHandle(loginForm:NgForm){
      this.loading = true
      this.errorText=''
      setTimeout(() => {
      const userSearch = this.usersList.filter(user => user.email === loginForm.value.email)
      if(userSearch.length>0){
        window.localStorage.setItem('user',JSON.stringify(loginForm.value))
        this.router.navigate(['/konto'])
        this.logged = true
      }
      else{
        this.errorText = "Nieprawidłowy email lub hasło"
        this.loading = false
      }
      
    }, 3000);
  }
  ngOnInit(): void {
  }

}
