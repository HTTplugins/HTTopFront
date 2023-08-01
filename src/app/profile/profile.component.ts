import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  username: string | null = null;
  mail: string | null = null;

  ngOnInit(): void {
    this.mail = localStorage.getItem('loggedInMail');
    this.username = localStorage.getItem('loggedInUser');
  }


}
