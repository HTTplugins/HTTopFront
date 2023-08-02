import { Component, OnInit } from '@angular/core';
import { news } from './news.model';
import { newsObtainerService } from './newsObtainer.service';
import { LoginRegisterService } from '../loginRegister.service';
import { ModalControlService } from '../modal-control.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news_list: news[] = [];
  userIsAdmin: boolean = false;

  constructor(
    private modalControl :ModalControlService,
    private login: LoginRegisterService,
    private newsObtainerService: newsObtainerService
  ) {}

  ngOnInit(): void {
    
    this.newsObtainerService.loadNews();

    this.news_list = this.newsObtainerService.news_list;
    this.initialiceAdminUser();

   
    
    
  }

  loadMoreNews() {
    this.newsObtainerService.page++;
    this.newsObtainerService.loadNews();
  }

  availableMoreNews() {
    //console.log("H");
    return this.newsObtainerService.availableMoreNews;
  }

  initialiceAdminUser() {
    var savedMail = localStorage.getItem('loggedInMail');
    console.log(savedMail);

    if (savedMail != null) {
      this.login.checkAdmin(savedMail).subscribe((isAdmin) => {
        this.userIsAdmin = isAdmin;
      });
    }

    
  }

  isOpenNewPostModal(){
    return this.modalControl.newPostIsOpen();
  }

  openNewPostModal(){
    
    this.modalControl.newPostOpenModal();

  }
}
