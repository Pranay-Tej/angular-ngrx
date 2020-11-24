import { articleActionTypes, articlesLoaded } from './article.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Article } from '../model/article.model';
import { createReducer, on } from '@ngrx/store';

export interface ArticleState extends EntityState<Article> {
  articlesLoaded: boolean;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>();

export const initialState = adapter.getInitialState({
  articlesLoaded: false,
});

export const articleReducer = createReducer(
  initialState,

  on(articleActionTypes.articlesLoaded, (state, action) => {
    return adapter.setAll(action.articles, { ...state, articlesLoaded: true });
  }),

  on(articleActionTypes.createArticle, (state, action) => {
    return adapter.addOne(action.article, state);
  }),

  on(articleActionTypes.deleteArticle, (state, action) => {
    return adapter.removeOne(action.articleId, state);
  }),

  on(articleActionTypes.updateArticle, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);
