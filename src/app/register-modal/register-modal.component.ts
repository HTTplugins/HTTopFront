import { Component } from '@angular/core';
import { ModalControlService } from '../modal-control.service';
import { HttpClient } from '@angular/common/http';
import { UserFormData } from '../user.model';
import { Observable } from 'rxjs';
import { LoginRegisterService } from '../loginRegister.service';


@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
})
export class RegisterModalComponent {
  
  formatErrors: string[] = [];


  formData: UserFormData = {
    username: '',
    mail: '',
    mailConfirm: '',
    password: '',
    passwordConfirm: ''
  };

  constructor(
    private modalControl: ModalControlService,
    private http: HttpClient,
    private registerService :LoginRegisterService
  ) {}

  RegisterCloseModal() {
    this.modalControl.registerCloseModal();
  }

  RegisterOpenLoginModal(){
    this.modalControl.registerCloseModal();
    this.modalControl.loginOpenModal();
  }

  onSubmit(formData: UserFormData) {
    this.formatErrors = [];
    
    if(this.testFormat(formData)){
      this.formatErrors = this.registerService.register(formData);
    }
  
  }

  getCorrectRegister(){
    return this.registerService.correctRegister;
  }

  testFormat(formData: UserFormData) {
    var testPassed = true;

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

    const minlength = 7;
    const hasCap = /[A-Z]/.test(formData.password);
    const hasLow = /[a-z]/.test(formData.password);
    const hasNum = /\d/.test(formData.password);

    if(formData.username === ''){
      this.formatErrors.push('Username can not be blank');
      testPassed = false;
    } else if(formData.username.length > 25) {
      this.formatErrors.push('Username is too much long');
      testPassed = false;
    }

    if (!emailPattern.test(formData.mail)) {
      this.formatErrors.push('Invalid email format');
      testPassed = false;
    } else if (formData.mail !== formData.mailConfirm) {
      this.formatErrors.push('Email confirmation does not match');
      testPassed = false;
    }else if(formData.mail.length > 45) {
      this.formatErrors.push('mail is too much long');
      testPassed = false;
    }

    if (formData.password.length < minlength) {
      this.formatErrors.push('your password must have a length of 7 or more');
      testPassed = false;
    } else if (!hasCap) {
      this.formatErrors.push('your password must have a capital letter');
      testPassed = false;
    } else if (!hasLow) {
      this.formatErrors.push('your password must have a lower case letter');
      testPassed = false;
    } else if (!hasNum) {
      this.formatErrors.push('your password must have at least a number');
      testPassed = false;
    } else if (formData.password !== formData.passwordConfirm) {
      this.formatErrors.push('Password confirmation does not match');
      testPassed = false;
    } else if(formData.password.length > 25) {
      this.formatErrors.push('Password is too much long');
      testPassed = false;
    }

    return testPassed;
  }



  

 
  
  
}