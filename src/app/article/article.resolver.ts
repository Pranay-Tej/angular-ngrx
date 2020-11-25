import { loadArticles } from './store/article.actions';
import { filter, first, tap } from 'rxjs/operators';
import { areArticlesLoaded } from './store/article.selectors';
import { State } from './../store/reducers/index';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class ArticleResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<State>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areArticlesLoaded),
      tap((articlesLoaded) => {
        console.log('Load Articles');
        if(!articlesLoaded){
          this.store.dispatch(loadArticles());
        }
      }),
      filter((articlesLoaded) => articlesLoaded),
      first()
    );
  }
}
