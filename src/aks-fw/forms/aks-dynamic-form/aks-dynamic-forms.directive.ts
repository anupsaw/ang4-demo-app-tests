import { FormGroup } from '@angular/forms';

import { MatInput, MatInputBase, } from '@angular/material';
import {
  Directive, Input, ElementRef, ViewContainerRef, TemplateRef, ViewChild, ChangeDetectorRef
  , Renderer2, OnInit, ComponentFactoryResolver, AfterViewInit, Injector, EmbeddedViewRef
  , ComponentRef, Type, Component, Output, EventEmitter
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IAksFormConfig } from './aks-forms.interface';
import { AksFormsComponentService, AksElementType } from '../componentService/aks-forms-component.service';


@Directive({
  selector: '[aksDynamicControl]',
  providers: [AksFormsComponentService]
})
export class AksDynamicFormsDirective implements OnInit, AfterViewInit {

  @Input() elementConfigs: Array<IAksFormConfig>;
  @Input() formGroup: FormGroup;
  @Input() attachEvent: boolean;
  @Output() controlClick: EventEmitter<IAksFormConfig>;
  @ViewChild('controls', { read: ViewContainerRef }) controls: ViewContainerRef;

  constructor(private el: ElementRef,
    private tpl: TemplateRef<any>,
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private rendere: Renderer2,
    private injector: Injector,
    private cd: ChangeDetectorRef,
    private formsComponentService: AksFormsComponentService
  ) {
    this.controlClick = new EventEmitter<IAksFormConfig>();
  }

  ngOnInit() {
    console.log(this.elementConfigs);
    console.log(this.formGroup);

  }

  createDynamicControl(element: IAksFormConfig, type: Type<any>) {
    //  const factories = Array.from(this.resolver['_factories'].keys());
    //  const factoryClass = <Type<any>>factories.find((x: any) => x.name === type);
    const componentFactory = this.resolver.resolveComponentFactory(type);
    const controlComponent: ComponentRef<any> = this.container.createComponent(componentFactory);
    controlComponent.instance.controlConfigs = element;
    if (this.attachEvent) {
      const ele = controlComponent.location.nativeElement;
      this.rendere.listen(ele, 'click', (e) => {
        console.log(e);
        console.log(element);
        this.controlClick.emit(element);
      });
    }
    controlComponent.instance.controlFormGroup = this.formGroup;
    this.cd.detectChanges();
  }

  ngAfterViewInit() {
    if (this.elementConfigs) {
      this.elementConfigs.forEach(elConfig => {
        const componentType = this.formsComponentService
          .getComponentType(AksElementType[elConfig.type]);
        this.createDynamicControl(elConfig, componentType);
      });
    }
  }


}
