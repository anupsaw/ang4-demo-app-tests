import { Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { formConfig } from '../../../data/form.config';
import { IAksFormConfig, IAksValidations, AksFormConfig, AksFormsComponent } from '@aksfw/forms';
@Component({
  selector: 'aks-admin',
  templateUrl: './aks-admin.component.html',
  styleUrls: ['./aks-admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AksAdminComponent implements OnInit {

  @ViewChild('sidenavRight') sidenavRight: MatSidenav;
  @ViewChild('propertyConfigForm') propertyConfigForm: AksFormsComponent;
  @ViewChild('designForm') designForm: AksFormsComponent;

  formConfig = formConfig;
  elementProperties: Array<IAksFormConfig>;
  reload: boolean;
  fieldName: string;
  elementData: any;

  constructor(private cd: ChangeDetectorRef) {
    this.elementProperties = [];
  }

  ngOnInit() {
  }

  onControlClicked(ele: IAksFormConfig) {
    this.sidenavRight.open();
    console.log(ele);
    this.parsePropertyConfig(ele);
  }

  parsePropertyConfig(elementConfig: IAksFormConfig) {
    this.reload = false;
    this.elementProperties = [];
    this.fieldName = elementConfig.name;
    this.elementData = elementConfig;
    for (const e in elementConfig) {
      if (e) {
        this.elementProperties.push(new AksFormConfig({ control: 'input', name: e, type: 'text', disabled: true }));
        console.log(e);
      }
    }
    this.reload = true;
    console.log(this.elementProperties);
    // this.cd.detectChanges();

  }

  editAll() {
    this.propertyConfigForm.enableElement(this.elementProperties);
  }

  save() {
    this.propertyConfigForm.disableElement(this.elementProperties);
    console.log(this.elementData);
    // this.elementData =  this.propertyConfigForm.formGroup.value;
    const changedVal = [];
    console.log(this.designForm.formGroup.get(this.elementData.name));
    this.formConfig.map((ele, i) => {
      ele.name === this.elementData.name ?  changedVal.push(this.propertyConfigForm.formGroup.value)  : changedVal.push(ele) ;
    });

    this.formConfig = changedVal;
    console.log(this.elementData);

  }
  noop() { }
}



