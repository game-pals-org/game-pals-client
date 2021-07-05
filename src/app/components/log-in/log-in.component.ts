import { Component, OnInit } from '@angular/core';
import {LoginStateService} from "../../service/login-state.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../service/account.service";
import {LoginRegisterInfo} from "../../model/login-register-info.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public message: string = '';

  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  public onSelect () {
    const username = this.loginForm.value.username;
    let loginInfo: LoginRegisterInfo = {success: false, username: '', message: ''};
    this.accountService.loginUser(username, this.loginForm.value.password).subscribe(
      (loginRegisterInfo: LoginRegisterInfo) => {
        loginInfo = loginRegisterInfo;
        this.loginForm.reset();
        console.log(loginInfo.success)
        if (loginInfo.success){
          this.loginStateService.isLogged = new Observable<boolean>(o => o.next(true));
          this.loginStateService.username = username;
        } else {
          this.loginStateService.isLogged = new Observable<boolean>(o => o.next(false));
        }
        this.message = loginInfo.message;
      }
    )
  }



  constructor(private loginStateService: LoginStateService, private accountService: AccountService) { }

  ngOnInit(): void {
  }

}
