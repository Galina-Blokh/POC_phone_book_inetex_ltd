import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginFC = new FormControl('',
    [Validators.required, Validators.pattern( '^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$')]);
  passwordFC = new FormControl('',
    [Validators.required, Validators.pattern( '^(?=.*[0-9])(?=.*[$~\\-_])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$~\\-_]{8,}$' )]);
  authFG = new FormGroup({
    login: this.loginFC,
    password: this.passwordFC
  });
  constructor() { }
  ngOnInit() {
  }
  authSubmit(){
    if (this.authFG.invalid){ return;} else {
      AuthComponent.sendAuthInfo(this.authFG.value);}
     }
  static sendAuthInfo(info){
    console.log(info);}
  }
