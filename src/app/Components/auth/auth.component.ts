import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilService} from '../../Services/util.service';
import {PatternsService} from '../../Services/patterns.service';
import {HttpService} from '../../Services/http.service';
import {DataExchangeService} from '../../Services/data-exchange.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  signin = true;

  loginFC = new FormControl('',
    [Validators.required, Validators.pattern(
      // '^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$')]
      PatternsService.emailPattern)]
  );
  passwordFC = new FormControl('',
    [Validators.required, Validators.pattern(
      // '^(?=.*[0-9])(?=.*[$~\\-\\!\\@_])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$~\\-\\!\\@_]{8,}$')]
      PatternsService.passwordPattern)]
  );
  authFG = new FormGroup({
    email: this.loginFC,
    password: this.passwordFC
  });
  // {8,} -- минимальная длина пароля
  constructor(private util: UtilService,
              private http: HttpService) {  }

  ngOnInit() {
  }

  authSubmit(){
    if (this.authFG.invalid) {
      return;
    } else {
      this.sendAuthInfo(this.authFG.value);
    }
  }

  sendAuthInfo(info) {
    if (this.signin) {
      this.http.login(info).subscribe(
        (result) => {
          localStorage.setItem('contacts', (result as any).token);
          this.util.refresh();
          console.log(localStorage.getItem('contact'));
          DataExchangeService.setPage('phone-book');
        },
        (error) => {
          console.log(error);
          this.util.snack(error.error.message);
        }
      )
    }
  }

  getLoginError() {
    // if (this.loginFC.hasError('required')) { return 'empty login'; }
    // if (this.loginFC.hasError('pattern')) { return 'e-mail is not valid'; }
    return UtilService.getRequiredPatternError(this.loginFC, 'empty login', 'e-mail is not valid' );
  }

  getPasswordError() {
    // if (this.passwordFC.hasError('required')) { return 'empty password'; }
    // if (this.passwordFC.hasError('pattern')) { return 'password is too simple'; }
    return UtilService.getRequiredPatternError(this.passwordFC, 'empty password', 'password is too simple' );
  }

  toggleSignin() {
    this.signin = !this.signin;
  }
}
