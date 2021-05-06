import { NgModule, Component, enableProdMode, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxSelectBoxModule } from 'devextreme-angular';
import { DxTreeViewModule, DxTreeViewComponent, DxListModule, DxContextMenuModule, DxContextMenuComponent } from 'devextreme-angular';
import { Theme, MenuItem, Service } from './resources.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  providers: [Service]
})
export class ResourcesComponent {
  @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;    
  @ViewChild(DxContextMenuComponent, { static: false }) contextMenu: DxContextMenuComponent;

  themes: Theme[];
  selectedTreeItem: Theme;
  logItems: string[];
  menuItems: MenuItem[];
  
  constructor(service: Service) {
    this.themes = service.getThemes();
    this.menuItems = service.getMenuItems();
    this.logItems = [];
  } 
  treeViewItemContextMenu(e) {
    console.log(e.itemData.content);

    this.selectedTreeItem = e.itemData;

    const isTheme = e.itemData.content !== undefined;
    const contextMenu = this.contextMenu.instance;
    contextMenu.option('items[0].visible', !isTheme);
    contextMenu.option('items[1].visible', !isTheme);
    contextMenu.option('items[2].visible', isTheme);
    contextMenu.option('items[3].visible', isTheme);

    contextMenu.option('items[0].disabled', e.node.expanded);
    contextMenu.option('items[1].disabled', !e.node.expanded);

    // display the text
    if (isTheme) {
      this.logItems = [];
      let logEntry = `${this.selectedTreeItem.content}`;               
      this.logItems.push(logEntry);
    }
  }
  contextMenuItemClick(e) {
    console.log('hey');
    let logEntry = '';
    const treeView = this.treeView.instance;
    switch(e.itemData.id) {
            case 'expand': {
                logEntry = `The '${this.selectedTreeItem.text}' group was expanded`;
                treeView.expandItem(this.selectedTreeItem.id);
                break;
            }
            case 'collapse': {
                logEntry = `The '${this.selectedTreeItem.text}' group was collapsed`;
                treeView.collapseItem(this.selectedTreeItem.id);
                break;
            }
            case 'details': {
                logEntry = `Details about '${this.selectedTreeItem.text}' were displayed`;               
                break;
            }
            case 'copy': {
                logEntry = `Information about '${this.selectedTreeItem.text}' was copied`;
                break;
          }
    }
    this.logItems.push(logEntry);
  }

  selectItem(e) {
    // this.currentItem = e.itemData;
  }

  ngOnInit(): void {
  }
}


