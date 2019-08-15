import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IAksFormConfig } from '../aks-dynamic-form/aks-forms.interface';
@Component({
  selector: 'aks-input',
  templateUrl: './aks-input.component.html',
  styleUrls: ['./aks-input.component.scss']
})
export class AksInputComponent implements OnInit {

  controlConfigs: IAksFormConfig;
  controlName: FormControl;
  controlFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
