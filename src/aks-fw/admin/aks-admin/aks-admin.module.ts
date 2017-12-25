import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { AksAdminComponent } from './aks-admin.component';
import { AksFormsModule } from '@aksfw/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    AksFormsModule,
    MatTooltipModule,
    MatButtonModule
  ],
  declarations: [AksAdminComponent],
  exports: [AksAdminComponent]
})
export class AksAdminModule { }
