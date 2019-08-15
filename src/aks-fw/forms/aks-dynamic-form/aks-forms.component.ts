import {
  Directive, Input, ElementRef, ViewContainerRef, TemplateRef, ViewChild, ChangeDetectorRef
  , Renderer2, OnInit, ComponentFactoryResolver, AfterViewInit, Injector, EmbeddedViewRef
  , ComponentRef, Type, Component, Output, EventEmitter, ViewEncapsulation, OnChanges
  , SimpleChanges
} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, AbstractControl } from '@angular/forms';

import { AksInputComponent } from '../aks-input/aks-input.component';
import { IAksFormConfig } from './aks-forms.interface';
import { AksFormsComponentService, AksElementType } from '../componentService/aks-forms-component.service';
@Component({
  selector: 'aks-forms',
  templateUrl: './aks-forms.component.html',
  styleUrls: ['./aks-forms.component.scss'],
  host: { class: 'aks-forms' },
  providers: [AksFormsComponentService],
  encapsulation: ViewEncapsulation.None
})
export class AksFormsComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() formConfig: Array<IAksFormConfig>;
  @Input() formGroup: FormGroup;
  @Input() attachEvent: boolean;
  @Input() formData: Array<any>;
  @Output() controlClick: EventEmitter<IAksFormConfig>;

  @ViewChild('controls', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private el: ElementRef,
    private fb: FormBuilder,
    private resolver: ComponentFactoryResolver,
    private rendere: Renderer2,
    private injector: Injector,
    private cd: ChangeDetectorRef,
    private formsComponentService: AksFormsComponentService
  ) {
    this.controlClick = new EventEmitter<IAksFormConfig>();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.formConfig) {
      if (!changes.formConfig.firstChange) {

        // this.cd.detectChanges();
        this.loadComponents();
        //  this.createFormGroup();
        //  this.createFormControls();
      }

    }


  }

  ngOnInit() {
    // console.log(this.formConfig);
    // console.log(this.formGroup);
    this.createFormGroup();
    // this.loadComponents();
  }

  createDynamicControl(element: IAksFormConfig, type: Type<any>) {
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

    this.createFormControls();
    // this.cd.markForCheck();
    // this.loadComponents();
  }


  createFormGroup() {
    this.formGroup = this.fb.group({});
    if (this.formConfig) {
      this.formConfig.forEach((ctrl) => {
        this.formGroup.addControl(ctrl.name, new FormControl({ value: '', disabled: ctrl.disabled }));
      });
      this.formData ? this.formGroup.patchValue(this.formData) : this.noop();
    }
  }

  noop() { }
  createFormControls() {
    if (this.formConfig) {
      this.formConfig.forEach(elConfig => {
        const componentType = this.formsComponentService
          .getComponentType(AksElementType[elConfig.type]);
        this.createDynamicControl(elConfig, componentType);
      });
    }
  }

  loadComponents() {
    this.container.clear();
    this.createFormGroup();
    this.createFormControls();

  }

  disableElement(elements: Array<IAksFormConfig> | IAksFormConfig) {
    if (Array.isArray(elements)) {
      elements.forEach((ele) => {
        this.formGroup.get(ele.name).disable();
      });
    } else {
      this.formGroup.get(elements.name).disable();
    }

  }

  enableElement(elements: Array<IAksFormConfig> | IAksFormConfig) {
    if (Array.isArray(elements)) {
      elements.forEach((ele) => {
        this.formGroup.get(ele.name).enable();
      });
    } else {
      this.formGroup.get(elements.name).enable();
    }

  }

}



  // dynamicForm: FormGroup;
  // @Input() formConfig: Array<IAksFormConfig>;
  // @Input() attachEvent: boolean;
  // @Output() controlClick: EventEmitter<IAksFormConfig>;
  // constructor(private fb: FormBuilder) {
  //   this.controlClick = new EventEmitter<IAksFormConfig>();
  // }

  // ngOnInit() {

  //   this.dynamicForm = this.fb.group({});
  //   if (this.formConfig) {
  //     this.formConfig.forEach((ctrl) => {
  //       this.dynamicForm.addControl(ctrl.name, new FormControl({ value: '', disabled: true }));
  //     });
  //   }


  // }

  // showFormData() {
  //   console.log(this.dynamicForm);
  // }

  // onControlClick(ele: IAksFormConfig) {
  //   this.controlClick.emit(ele);
  // }

//}
