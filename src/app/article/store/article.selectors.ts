import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState, selectAll } from './article.reducers';

export const articleFeatureSelector = createFeatureSelector<ArticleState>('articles');

export const getAllArticles = createSelector(
  articleFeatureSelector,
  selectAll
)

export const areArticlesLoaded = createSelector(
  articleFeatureSelector,
  state => state.articlesLoaded
)