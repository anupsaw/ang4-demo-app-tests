import { Injectable, ComponentFactoryResolver, Component, ComponentFactory } from '@angular/core';


import { AksInputComponent } from '../aks-input/aks-input.component';


export enum AksElementType {
  text = <any>'text',
  email = <any>'email',
  boolean = <any>'boolean',
  number = <any>'number',
  password = <any>'password',
  textarea = <any>'textarea',
  slider = <any>'slider',
  slideToggle = <any>'slide-toggle',
  checkbox = <any>'checkbox',
  radio = <any>'radio',
  select = <any>'select',
  button = <any>'button',
  submit = <any>'submit',
  array = <any>'array',
}

// export enum AksElement {
//   input = <any>'input',
// }

@Injectable()
export class AksFormsComponentService {

  constructor(private resolver: ComponentFactoryResolver) { }


  getComponentType(element: AksElementType) {

    switch (element) {
      case AksElementType.text:
      case AksElementType.password:
      case AksElementType.number:
      case AksElementType.email:
        return AksInputComponent;
      default:
        throw new Error(`element not found ${element}`);

    }

  }

  createComponent() {

  }


}
