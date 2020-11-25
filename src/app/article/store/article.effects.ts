import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from '../services/article.service';
import { articleActionTypes } from './article.actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class ArticleEffects {
  constructor(
    private articleService: ArticleService,
    private actions$: Actions
  ) {}

  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(articleActionTypes.loadArticles),
      concatMap(() => this.articleService.getAllArticles()),
      map((articles) => articleActionTypes.articlesLoaded({ articles }))
    )
  );

  createArticle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(articleActionTypes.createArticle),
        concatMap((action) => this.articleService.createArticle(action.article))
      ),
    { dispatch: false }
  );

  deleteArticle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(articleActionTypes.deleteArticle),
        concatMap((action) =>
          this.articleService.deleteArticle(action.articleId)
        )
      ),
    { dispatch: false }
  );

  updateArticle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(articleActionTypes.updateArticle),
        concatMap((action) =>
          this.articleService.updateArticle(
            action.update.id,
            action.update.changes
          )
        )
      ),
    { dispatch: false }
  );
}
