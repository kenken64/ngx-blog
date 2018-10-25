import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './components/article/article.component';
import { AuthorComponent } from './components/author/author.component';
import { CategoryComponent } from './components/category/category.component';
import { PublishComponent } from './components/publish/publish.component';

const appRoutes = [
    {
        path: 'Author',
        component: AuthorComponent,
    },
    {
        path: 'Article',
        component: ArticleComponent,
    },
    {
        path: 'Category',
        component: CategoryComponent,
    },
    {
        path: 'Publish',
        component: PublishComponent,
    },
    {
        path: '', 
        redirectTo: '/Article', 
        pathMatch: 'full' 
    },
    {
        path: '**', 
        component: ArticleComponent,
    }
];


@NgModule({
    declarations: [
      
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: []
  })
export class RoutingModule { }