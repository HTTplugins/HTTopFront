import { Component } from '@angular/core';
import { ModalControlService } from '../modal-control.service';
import { UserFormData } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRegisterService } from '../loginRegister.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  Errors: string[] = [];

  formData: UserFormData = {
    username: '',
    mail: '',
    mailConfirm: '',
    password: '',
    passwordConfirm: ''
  
  };

  constructor(private modalControl: ModalControlService, 
    private http: HttpClient,
    private loginService :LoginRegisterService) {}

  LoginCloseModal() {
    this.modalControl.loginCloseModal();
  }

  onSubmit(formData: UserFormData) {
    this.Errors = [];
    this.loginService.tryLogin(formData).subscribe(
      (errors) => {
        this.Errors = errors;
        if (this.Errors.length === 0) {
          this.LoginCloseModal();
          window.location.reload();
        }
      },
      (error) => {
        console.error('Error con el inicio de sesión', error);
      }
    );
  }
  



}
