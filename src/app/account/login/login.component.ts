import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      phone: [
        '',
        Validators.compose([Validators.required,Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/),Validators.minLength(10),Validators.maxLength(10)],),
      ],
      password: [
        '',
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

  login():void{

  }

  navigateTo(): void {

  }

}
