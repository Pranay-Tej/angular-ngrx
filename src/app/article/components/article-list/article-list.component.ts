import { getAllArticles } from './../../store/article.selectors';
import { ArticleService } from './../../services/article.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/article.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(
    private articleService: ArticleService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.articles$ = this.store.select(getAllArticles);
  }
}
