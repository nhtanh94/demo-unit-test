import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAccount } from 'src/app/model/auth/account.model';
import { UserService } from '../../model';
import { AuthService } from '../../model/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account:IAccount | undefined;
  form!: FormGroup;
  error ='';
  constructor( private fb: FormBuilder, private auth:AuthService,private user: UserService,private router:Router) { }

  ngOnInit(): void {
    this.initForm(this.account);
  }

  initForm(account?:IAccount): void {
    this.form = this.fb.group({
      phone: [
        account && account.phone ? account.phone:'',
        Validators.compose([Validators.required,Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/),Validators.minLength(10),Validators.maxLength(10)],),
      ],
      password: [
        account && account.password? account.password:'',
        Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(6),Validators.maxLength(6)]),
      ],
    });

  }

  get phone() {
    return this.form.get('phone');
  }

  get password() {
    return this.form.get('password');
  }

  submit():void{
    this.error ='';
    if(this.form.invalid)
    return
    const account = {phone:this.form.controls['phone'].value,password:this.form.controls['password'].value} as IAccount;
    this.auth.login(account).subscribe(res=>{
      if(res.success){
        this.user.isLoggedIn = true;
        this.user.user.name = res.data!.userName;
        this.goToDashboard();
      }
      if(!res.success){
        this.error = res.error?.errMessage || '';
      }
    })
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

}
