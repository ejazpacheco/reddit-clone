import { Component } from '@angular/core';
import { Article} from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('CNN', 'http://cnn.com', 0),
      new Article('NBC', 'http://nbc.com', 4),
      new Article('CP24', 'http://cp24.com', 6)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value,link.value));
    return false;
  }

  sortedArticles() {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }

}
