import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalControlService {
  private loginModalOpen = false;
  private registerModalOpen = false;
  private newPostModalOpen = false;
  private confirmationModalOpen = false;



  

  loginIsOpen(): boolean {
    return this.loginModalOpen;
  }

  loginOpenModal(): void {
    this.loginModalOpen = true;
    
  }

  loginCloseModal(): void {
    this.loginModalOpen = false;
  }


  registerIsOpen(): boolean {
    return this.registerModalOpen;
  }

  registerOpenModal(): void {
    this.registerModalOpen = true;
  }

  registerCloseModal(): void {
    this.registerModalOpen = false;
  }

  newPostOpenModal(): void {
    this.newPostModalOpen = true;

  }

  newPostCloseModal(): void {
    this.newPostModalOpen = false;
  }
  confirmationIsOpen(): boolean {
    return this.confirmationModalOpen;
  }

  confirmationOpenModal(): void {
   
    this.confirmationModalOpen = true;
  }
  confirmationCloseModal(): void {
   
    this.confirmationModalOpen = false;
  }

  newPostIsOpen(): boolean {
    return this.newPostModalOpen;
  }


}
