import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { newsObtainerService } from '../newsObtainer.service';
import { news } from '../news.model';

@Component({
  selector: 'app-detailed-news',
  templateUrl: './detailed-news.component.html',
  styleUrls: ['./detailed-news.component.css']
})
export class DetailedNewsComponent implements OnInit {
  newsId: string = 'a';
  detailedNewsInfo :news;

  constructor(private route: ActivatedRoute, private newsObtainer :newsObtainerService){}

  ngOnInit() {
    console.log('a');
    this.route.queryParams.subscribe(params => {
      this.newsId = params['id'];
      this.detailedNewsInfo = this.newsObtainer.getDetailedNews(parseInt(this.newsId));
    });

    console.log(this.detailedNewsInfo);

  }

  DNisUndefined(){
    return this.detailedNewsInfo == undefined;
  }
}
