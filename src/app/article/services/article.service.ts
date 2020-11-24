import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../model/article.model';

@Injectable()
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${environment.api_url}/articles`);
  }

  createArticle(article: Article): Observable<Article>{
    return this.httpClient.post<Article>(`${environment.api_url}/articles`, article)
  }

  updateArticle(articleId: string): Observable<any> {
    return this.httpClient.delete(`${environment.api_url}/articles/${articleId}`);
  }

  updateCourse(articleId: string | number, changes: Partial<Article>): Observable<any> {
    return this.httpClient.put(`${environment.api_url}/articles/${articleId}`, changes);
  }
}
