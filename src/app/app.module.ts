import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { PublishComponent } from './components/publish/publish.component';
import { AuthorComponent } from './components/author/author.component';
import { ArticleComponent } from './components/article/article.component';
import { CategoryComponent } from './components/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app.routing';
import { MaterialModule } from './material.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PublishComponent,
    AuthorComponent,
    ArticleComponent,
    AppHeaderComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    QuillModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
