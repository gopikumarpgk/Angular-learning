import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdFormComponent } from './td-form/td-form.component';

const routes: Routes = [
  {path : 'tdform', component : TdFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsModuleRoutingModule { }
