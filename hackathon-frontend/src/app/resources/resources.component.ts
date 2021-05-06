import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeViewModule, DxSelectBoxModule } from 'devextreme-angular';
import { Article } from './resources.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  providers: [Article]
})
export class ResourcesComponent {
  articles: Article[];
  currentItem: Article;

  constructor(article: Article) {
    // this.articles = article.
    this.currentItem = this.articles[0];
  }
  selectItem(e) {
    this.currentItem = e.itemData;
  }

  ngOnInit(): void {
  }
}


