import { Component, OnInit } from '@angular/core';
import {faCircleRight, faUser} from '@fortawesome/free-regular-svg-icons'
import {faTiktok, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faHouse, faNewspaper, faSkullCrossbones, faAnchor, faMap} from '@fortawesome/free-solid-svg-icons'
import { ModalControlService } from 'src/app/modal-control.service';
import { LoginRegisterService } from 'src/app/loginRegister.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuCollapsed = true;

  youtube = faYoutube;
  tiktok = faTiktok;
  twitter = faTwitter;
  out = faCircleRight;
  userIcon = faUser;
  homeIcon = faHouse;
  newsIcon = faNewspaper;
  piratesIcon = faSkullCrossbones;
  marinesIcon = faAnchor;
  mapIcon = faMap;

  showLoginModal = false;
  loggedInUserName: string | null = null;
  loggedInMail: string | null = null;
  isDropdownOpen: boolean = false;

  constructor(private modalControl :ModalControlService, private loginRegisterService :LoginRegisterService){
    
  }

  ngOnInit(): void {
    // Verificar si hay un usuario logeado en el almacenamiento local
    //
    
    this.loggedInMail = localStorage.getItem('loggedInMail');
    this.loggedInUserName = localStorage.getItem('loggedInUser');
  }

  logout() {
    this.loginRegisterService.logout();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  openLoginModal() {
    //event.preventDefault();
    
    this.modalControl.loginOpenModal();
  }

  openRegisterModal() {
    this.modalControl.registerOpenModal();
  }


  toggleMenu() :void{
    this.menuCollapsed = !this.menuCollapsed;
  }

  

}
