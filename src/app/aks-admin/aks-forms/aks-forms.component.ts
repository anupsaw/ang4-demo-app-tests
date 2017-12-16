import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, AbstractControl } from '@angular/forms';

import { config, AksFormConfig } from './aks-forms.config';
@Component({
  selector: 'aks-forms',
  templateUrl: './aks-forms.component.html',
  styleUrls: ['./aks-forms.component.scss']
})
export class AksFormsComponent implements OnInit {

  dynamicForm: FormGroup;
  @Input() formConfig: Array<AksFormConfig>;
  @Input() formData: object;
  controls: AbstractControl;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.formConfig = config;
    this.dynamicForm = this.fb.group({});
    this.formConfig.forEach((ctrl) => {
      this.dynamicForm.addControl(`${ctrl.name}`, new FormControl());
    });


  }

  showFormData() {
    console.log(this.dynamicForm);
  }

}
