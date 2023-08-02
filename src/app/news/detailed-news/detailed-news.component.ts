import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { newsObtainerService } from '../newsObtainer.service';
import { news } from '../news.model';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { ModalControlService } from 'src/app/modal-control.service';
import { LoginRegisterService } from 'src/app/loginRegister.service';


@Component({
  selector: 'app-detailed-news',
  templateUrl: './detailed-news.component.html',
  styleUrls: ['./detailed-news.component.css']
})
export class DetailedNewsComponent implements OnInit {
  userIsAdmin: boolean = false;
  newsId: string = 'a';
  detailedNewsInfo :news;
  trashIcon = faTrash;

  constructor(private route: ActivatedRoute, private newsObtainer :newsObtainerService,
     private modal :ModalControlService,
     private login :LoginRegisterService){}

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.newsId = params['id'];
      this.detailedNewsInfo = this.newsObtainer.getDetailedNews(parseInt(this.newsId));
      this.initialiceAdminUser();
    });

    console.log(this.detailedNewsInfo);

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

  DNisUndefined(){
    return this.detailedNewsInfo == undefined;
  }

  

  openConfirmationModal(){
    this.modal.confirmationOpenModal();
    this.newsObtainer.setDetailedNewsId(parseInt(this.newsId));
  }

  getConfirmationModalState(){
    return this.modal.confirmationIsOpen();
  }
}
