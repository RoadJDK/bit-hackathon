import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { FormComponent } from './form/form.component';
import { ResourcesComponent } from './resources/resources.component';
import { LanguageComponent } from './language/language.component';
import { ProcessComponent } from './process/process.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'form', component: FormComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'process', component: ProcessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
