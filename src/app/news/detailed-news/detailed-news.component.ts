import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { newsObtainerService } from '../newsObtainer.service';
import { news } from '../news.model';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { ModalControlService } from 'src/app/modal-control.service';


@Component({
  selector: 'app-detailed-news',
  templateUrl: './detailed-news.component.html',
  styleUrls: ['./detailed-news.component.css']
})
export class DetailedNewsComponent implements OnInit {
  isAdmin: boolean = false;
  newsId: string = 'a';
  detailedNewsInfo :news;
  trashIcon = faTrash;

  constructor(private route: ActivatedRoute, private newsObtainer :newsObtainerService, private modal :ModalControlService){}

  ngOnInit() {
    console.log('a');
    this.route.queryParams.subscribe(params => {
      this.newsId = params['id'];
      this.detailedNewsInfo = this.newsObtainer.getDetailedNews(parseInt(this.newsId));
      this.isAdmin = params['userIsAdmin'];
    });

    console.log(this.detailedNewsInfo);

  }

  DNisUndefined(){
    return this.detailedNewsInfo == undefined;
  }

  

  openConfirmationModal(){
    this.modal.setConfirmationModalOpen(true);
  }
}
