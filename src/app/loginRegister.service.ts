import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserFormData } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginRegisterService {
  backendUrl = 'http://localhost:8080/api/users';

  correctRegister = false;

  constructor(private http: HttpClient) {}

  checkAdmin(mail: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.backendUrl}/checkAdmin`, mail);
  }

  //common methods
  checkMailInUse(mail: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.backendUrl}/checkMail`, mail);
  }

  getUserByEmail(email: string): Observable<UserFormData> {
    return this.http.get<UserFormData>(`${this.backendUrl}/getUserByEmail?email=${email}`);
  }

  checkUserInUse(userName: string): Observable<boolean> {
    return this.http.post<boolean>(
      `${this.backendUrl}/checkUsername`,
      userName
    );
  }

  //Login - logout methods

  checkCorrectPassword(user: UserFormData): Observable<boolean> {
    return this.http.post<boolean>(`${this.backendUrl}/checkPassword`, user);
  }

  tryLogin(formData: UserFormData): Observable<string[]> {
    const Errors: string[] = [];
  
    return new Observable<string[]>(observer => {
      this.checkMailInUse(formData.mail).subscribe(
        (usedMail) => {
          if (usedMail) {
            this.checkCorrectPassword(formData).subscribe(
              (correctPass) => {
                if (correctPass) {
                  this.getUserByEmail(formData.mail).subscribe(
                    (user) => {
                      localStorage.setItem('loggedInUser', user.username);
                      localStorage.setItem('loggedInMail', user.mail);
                      observer.next(Errors); 
                      observer.complete(); 
                    },
                    (error) => {
                      console.error('Error con los servicios de inicio de sesión', error);
                      observer.error(error); 
                    }
                  );
                } else {
                  Errors.push('contraseña incorrecta');
                  observer.next(Errors); 
                  observer.complete();
                }
              },
              (error) => {
                console.error('Error con el inicio de sesión', error);
                observer.error(error); 
              }
            );
          } else {
            Errors.push('este correo electrónico no está registrado');
            observer.next(Errors); 
            observer.complete(); 
          }
        },
        (error) => {
          console.error('Error con el inicio de sesión', error);
          observer.error(error); 
        }
      );
    });
  }
  

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  //Register methods

  register(formData: UserFormData) {
    var Errors: string[] = [];

    this.checkUserInUse(formData.username).subscribe(
      (usedUser) => {
        if (usedUser) {
          Errors.push('this username is already in use.');
        } else {
          this.checkMailInUse(formData.mail).subscribe(
            (usedMail) => {
              if (usedMail) {
                Errors.push('this email is already in use.');
              } else {
                
                this.http
                  .post(`${this.backendUrl}/createUser`, formData)
                  .subscribe(
                    (response) => {
                      this.correctRegister = true;
                    },
                    (error) => {
                      console.error('Error while registering user', error);
                    }
                  );
              }
            },
            (error) => {
              console.error('Error in email verification', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error al verificar el usuario', error);
      }
    );

    return Errors;
  }
}
