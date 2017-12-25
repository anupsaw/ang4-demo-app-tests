import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AksFormConfig } from '../aks-dynamic-form/aks-forms.interface';
@Component({
  selector: 'aks-input',
  templateUrl: './aks-input.component.html',
  styleUrls: ['./aks-input.component.scss']
})
export class AksInputComponent implements OnInit {

  controlConfigs: AksFormConfig;
  controlName: FormControl;
  controlFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
