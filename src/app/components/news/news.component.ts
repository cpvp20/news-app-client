import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/common/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsArr: Array<any> | undefined;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  sendData(): void {
    let idTextarea: any = document.getElementById('idTextarea');
    let textValue = idTextarea.value;

    console.log('Textarea: ', textValue)
    let input: string = '';

    if (idTextarea) input += `${textValue}`;

    this.newsService.getNews(input).then(data => {
      console.log(data);
      this.newsArr = data;
    }).catch((err) => {
      console.error(err);
    })

  }

}
