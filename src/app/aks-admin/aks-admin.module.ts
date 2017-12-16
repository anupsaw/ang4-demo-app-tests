import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AksFormsModule } from './aks-forms/aks-forms.module';
import { AksAdminMainComponent } from './aks-admin-main/aks-admin-main.component';

@NgModule({
  imports: [
    CommonModule,
    AksFormsModule
  ],
  declarations: [AksAdminMainComponent],
  exports: [AksAdminMainComponent]
})
export class AksAdminModule { }
