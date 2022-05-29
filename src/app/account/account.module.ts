import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [SharedModule, AccountRoutingModule,FormsModule,ReactiveFormsModule],
  declarations: [LoginComponent],
})
export class AccountModule {}
