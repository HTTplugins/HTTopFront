import { Injectable } from '@angular/core';
import { news } from './news.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class newsObtainerService {
  backendUrl = 'http://localhost:8080/api/news';
  news_list: news[] = [];
  page :number = 1;
  availableMoreNews :boolean = true;
  private detailedNewsId :number;

  setDetailedNewsId(id :number){
    this.detailedNewsId = id;
  }

  getDetailedNewsId(){
    return this.detailedNewsId;
  }

  constructor(private http: HttpClient) {}

  loadNews() {
     
    this.http.post<news[]>(`${this.backendUrl}/getNews`,this.page).subscribe(
      (newsList) => {
        for( const news of newsList){
          if(newsList.length < 10){
            this.availableMoreNews = false;
          }
          
          this.formatDates(newsList);
          this.news_list.push(news);
        }
      },
      (error) => {
        console.error('Error con los servicios de inicio de sesión', error);
      }
    );
  }

  public getDetailedNews (newsID: number){
    
    this.http.post<news>(`${this.backendUrl}/getDetailedNews`,newsID).subscribe(
      (newsList) => {
        return newsList;
      },
      (error) => {
        console.error('Error no se encontró esa ID', error);
      }
    );

    return  this.news_list.find(news => news.id == newsID);
  }

  private formatDates(newsList: news[]) {
    for (const a of newsList) {
      const date = new Date(a.pdate);
  
      const dayOfWeek = date.toLocaleDateString('en', { weekday: 'short' });
      
      const dayOfMonth = date.toLocaleDateString('en', { day: '2-digit' });
     
      const month = date.toLocaleDateString('en', { month: 'short' });
      
    
      const year = date.toLocaleDateString('en', { year: 'numeric' });
  
      a.pdate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
    }
  }

  public addPost(news :news){
    this.http.post<news>(`${this.backendUrl}/addNews`,news).subscribe(
      (news) => {
        this.news_list.push(news);
      },
      (error) => {
        console.error('Error, failed to load the news', error);
      }
    );

  }

  public clear_news_list(){
    this.news_list = [];
  }
  
  public deletePost(){

    this.http.post<boolean>(`${this.backendUrl}/deleteNews`,this.detailedNewsId).subscribe(
      (news) => {
          this.news_list.pop();
          return true;
          
      },
      (error) => {
        return false;
        console.error('Error, failed to load the news', error);
      }
    );
    

  }

}
