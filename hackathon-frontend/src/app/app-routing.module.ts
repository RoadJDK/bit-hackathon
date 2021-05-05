import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { FormComponent } from './form/form.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'form', component: FormComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
