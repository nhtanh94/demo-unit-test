import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auth } from './auth';

type Account ={phone:string,password:string,name:string}

@Injectable()
export class UserService {

accounts:Account[] =[
  {
    phone:"0393844575",
    password:"123456",
    name:"TUAN ANH 1"
  }
  ,  {
    phone:"0393844576",
    password:"123456",
    name:"TUAN ANH 2"
  }
]


login(account: Account): Observable<Auth> {
  const index = this.accounts.findIndex(x=>x.password === account.password && x.phone === account.phone);
  if(index != -1)
  return of({
    success: true,
    data: {
      userName:this.accounts[index].name,
      token:"BEAR_23423423",
    },
    error:null
  }
  )

  else
  return of({
    success: false,
    data: null,
    error:{
      errCode:1,
      errMessage:'Tai khoan mat khau khong dung !'
    }
  }
  )
}

}
