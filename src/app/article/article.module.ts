import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './services/article.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { articleReducer } from './store/article.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './store/article.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('articles', articleReducer),
    EffectsModule.forFeature([ArticleEffects])
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
