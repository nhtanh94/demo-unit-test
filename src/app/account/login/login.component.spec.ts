import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { IAccount } from 'src/app/model/auth/account.model';
import { UserService } from '../../model';
import { AuthService } from '../../model/auth/auth.service';
import { LoginComponent } from './login.component';




describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService = {login:jest.fn()};
  let mockUserService ={
    isLoggedIn : false,
    user : { name: 'Sam Spade' }
  }

  let fakeRouter: Router;

  let buttonLogin: DebugElement;

  describe('Setup Component',()=>{

    beforeEach(async () => {

      await TestBed.configureTestingModule({
        declarations: [ LoginComponent],
        imports: [RouterModule,FormsModule,ReactiveFormsModule],
        providers: [
          { provide: AuthService, useValue: mockAuthService},
          { provide: UserService, useValue: mockUserService},
          { provide: Router, useValue: fakeRouter },
        ],
      })
      .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      buttonLogin = fixture.debugElement.query(By.css('button.btn-primary'));
    });

    it('should component create', () => {
      expect(component).toBeTruthy();
    });

    it('should form create', () => {
      component.ngOnInit();
      expect(component.form).toBeTruthy();
      expect(component.form.controls['phone'].value).toBe('');
      expect(component.form.controls['password'].value).toBe('');
    });

    it('should form create with default account', () => {
      const account = {phone:'0393844575',password:'112233'};
      const generateAccountFormSpy = jest.spyOn(component,'initForm');
      component.account = account;
      component.ngOnInit();
      expect(generateAccountFormSpy).toBeCalledWith(account);
      expect(component.form.value).toEqual(account);
    });

  })

  describe('Submit Form',()=>{

    describe('Form NOT valid',()=>{

      it('should NOT call login',()=>{
        component.initForm(undefined);
        component.submit();
        expect(mockAuthService.login).not.toBeCalled();

      });

    });

    describe('Form valid',()=>{

      it('should call login and return success = false and have error Mess',()=>{

        const account = {phone:'0393844575',password:'112233'};
        component.initForm(account as IAccount);
        mockAuthService.login.mockReturnValue(of({
          success: false,
          data: null,
          error:{
            errCode:1,
            errMessage:'Tai khoan mat khau khong dung !'
          }
        }));
        component.submit();
        expect(mockAuthService.login).toBeCalled();
        expect(component.error).toContain('Tai khoan mat khau khong dung');


      });

      it('should call login and return success = true and redirect',()=>{
        const goDasBoardFormSpy = jest.spyOn(component,'goToDashboard');
        const account = {phone:'0393844575',password:'112233'};
        component.initForm(account as IAccount);
        mockAuthService.login.mockReturnValue(of({
          success: true,
          data: {
            userName:'TUAN ANH',
            token:'1221232',
          }
        }));
        component.submit();
        expect(mockAuthService.login).toBeCalled();
        expect(mockUserService.isLoggedIn).toBe(true);
        expect(goDasBoardFormSpy).toBeCalled();
      });
    });

  })

  describe('Component Template',()=>{
    beforeEach(async () => {

      await TestBed.configureTestingModule({
        declarations: [ LoginComponent],
        imports: [RouterModule,FormsModule,ReactiveFormsModule],
        providers: [
          { provide: AuthService, useValue: mockAuthService},
          { provide: UserService, useValue: mockUserService},
          { provide: Router, useValue: fakeRouter },
        ],
      })
      .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      buttonLogin = fixture.debugElement.query(By.css('button.btn-primary'));
    });

    describe('Form NOT valid',()=>{

      it('should button login disable',()=>{
        const account = {phone:'asdawcxas',password:'112233'};
        component.initForm(account as IAccount);
        fixture.detectChanges();
        buttonLogin = fixture.debugElement.query(By.css('button.btn-primary'));
        expect(buttonLogin.nativeElement.getAttribute('disabled')).toEqual('');
      })

      it('should have error message',()=>{
        component.error = 'Loi ne';
        fixture.detectChanges();
        const divError : HTMLElement = fixture.nativeElement.querySelector('.errorMessage');
        expect(divError.textContent).toContain('Loi ne');
      })

    })

    describe('Form valid',()=>{

      it('should button login disable',()=>{
        const account = {phone:'0393844575',password:'112233'};
        component.initForm(account as IAccount);
        fixture.detectChanges();
        buttonLogin = fixture.debugElement.query(By.css('button.btn-primary'));
        expect(buttonLogin.nativeElement.getAttribute('disabled')).toEqual(null);
      })

    })

  })

});

//  it('should form create with default account',()=>{})
// describe('Setup Component',()=>{})
// describe('Setup Component',()=>{})
// describe('Setup Component',()=>{})
// describe('Setup Component',()=>{})
// describe('Setup Component',()=>{})
