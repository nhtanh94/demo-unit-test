import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isLogin = false;
  constructor(private userService: UserService,private router: Router) {}
  ngOnInit(): void {
    this.userService.isLoggedIn = false;
    this.isLogin = this.userService.isLoggedIn;
    if(!this.userService.isLoggedIn)
    this.router.navigate(['/login']);
  }
}
