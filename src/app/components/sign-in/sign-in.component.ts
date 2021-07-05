import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRegisterInfo} from "../../model/login-register-info.model";
import {AccountService} from "../../service/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  public message: string = '';

  public signingInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  public onSelect () {
    const username = this.signingInForm.value.username;
    let registerInfo: LoginRegisterInfo = {success: false, username: '', message: ''};
    this.accountService.registerUser(username, this.signingInForm.value.password).subscribe(
      (loginRegisterInfo: LoginRegisterInfo) => {
        registerInfo = loginRegisterInfo;
        this.signingInForm.reset();

        this.message = registerInfo.message;

        if(registerInfo.success){
          this.router.navigate(['/', 'log-in']);
        }
      }
    )
  }

  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit(): void {
  }

}
