import { Component, OnInit } from '@angular/core';
import { SignupUser } from '../../interfaces/SignupUser ';
import { LoginUser } from '../../interfaces/LoginUser ';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupUsers: SignupUser[] = [];
  signupObj: SignupUser = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: LoginUser = {
    emailId: '',
    password: ''
  };

  constructor() {

  }
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }
  onLogin() {
    const isUserExist = this.signupUsers.find(x => x.email == this.loginObj.emailId && x.password == this.loginObj.password)
    if(isUserExist != undefined) {
      alert('User Login Successfully')
    } else {
      alert("Wrong credentials")
    }
  }

}
