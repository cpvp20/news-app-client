import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  
  getNews(input: string) : Promise<any>{
    if(!input) return this.http.get("http://localhost:3000/news").toPromise();
    else return this.http.get(`http://localhost:3000/news/${input}`).toPromise();
  }


}
