import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModuleRoutingModule } from './forms-module-routing.module';
import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TdFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormsModuleModule { }
