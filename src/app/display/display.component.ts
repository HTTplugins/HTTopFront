import { Component, HostListener } from '@angular/core';
import { ModalControlService } from '../modal-control.service';
import { HomeSelectorService } from './homeSelector.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  showHome1: boolean = true;
  showHome2: boolean = false;

  constructor(private modalControl :ModalControlService, private homeSelector :HomeSelectorService){
    
  }

  LoginModalOpen() :boolean{
    return this.modalControl.loginIsOpen();
  }

  RegisterModalOpen() :boolean{
    return this.modalControl.registerIsOpen();
  }

  ishome1() :boolean{
    return this.homeSelector.homeNum === 1;
  }
  
  ishome2() :boolean{
    return this.homeSelector.homeNum === 2;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.homeSelector.homeNum === 1 && window.scrollY > 0) {
      this.homeSelector.setHomeNum(2);
    } else if (this.homeSelector.homeNum === 2 && window.scrollY === 0) {
      this.homeSelector.setHomeNum(1);
    }
  }
  
}
