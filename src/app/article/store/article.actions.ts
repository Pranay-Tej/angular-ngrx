import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Article } from '../model/article.model';

export const loadArticles = createAction('[Article List] Load via backend');

export const articlesLoaded = createAction(
  '[Article Effect] Articles Loaded',
  props<{ articles: Article[] }>()
);

export const createArticle = createAction(
  '[Create Article Component] Create Article',
  props<{ article: Article }>()
);

export const deleteArticle = createAction(
  '[Article List Operations] Delete Article',
  props<{ articleId: string }>()
);

export const updateArticle = createAction(
  '[Articles List Operations] Update Article',
  props<{ update: Update<Article> }>()
);

export const articleActionTypes = {
  loadArticles,
  articlesLoaded,
  createArticle,
  deleteArticle,
  updateArticle,
};
