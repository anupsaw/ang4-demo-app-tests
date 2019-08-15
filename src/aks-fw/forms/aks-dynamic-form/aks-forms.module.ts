import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AksInputComponent } from '../aks-input/aks-input.component';
import { AksFormsComponent } from './aks-forms.component';
import { AksDynamicFormsDirective } from './aks-dynamic-forms.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [AksInputComponent, AksFormsComponent, AksDynamicFormsDirective],
  exports: [AksInputComponent, AksFormsComponent],
  entryComponents: [AksInputComponent]
})
export class AksFormsModule { }
