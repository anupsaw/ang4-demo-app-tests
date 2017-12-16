import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AksInputComponent } from './aks-input/aks-input.component';
import { AksFormsComponent } from './aks-forms.component';
import { AksDynamicFormsDirective } from './aks-dynamic-forms.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [AksInputComponent, AksFormsComponent, AksDynamicFormsDirective],
  exports: [AksInputComponent, AksFormsComponent]
})
export class AksFormsModule { }
