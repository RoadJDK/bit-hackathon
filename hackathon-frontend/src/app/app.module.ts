import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormComponent } from './form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResourcesComponent } from './resources/resources.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { LanguageComponent } from './language/language.component';
import { ProcessComponent } from './process/process.component';
import { InfoComponent } from './info/info.component';
import { MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { DevExtremeModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTreeViewModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FormComponent,
    ResourcesComponent,
    LanguageComponent,
    ProcessComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatTreeModule,
    MatIconModule,
    DevExtremeModule,
    DxTreeViewModule,
    DxSelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
