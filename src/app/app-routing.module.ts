import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleResolver } from './article/article.resolver';
import { ArticleListComponent } from './article/components/article-list/article-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'articles',
  },
  {
    path: 'articles',
    component: ArticleListComponent,
    resolve: {
      articles: ArticleResolver,
    },
  },
  {
    path: '**',
    redirectTo: 'articles',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
