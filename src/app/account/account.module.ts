import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../model';
import { AuthService } from '../model/auth/auth.service';

import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [SharedModule, AccountRoutingModule,RouterModule,FormsModule,ReactiveFormsModule],
  declarations: [LoginComponent],
  providers: [AuthService,UserService]
})
export class AccountModule {}
