import { IAksFormConfig, IAksValidations } from './aks-forms.interface';

export class AksFormConfig implements IAksFormConfig {

  control: string;
  name: string;
  type: string;
  disabled?: boolean;
  validations?: IAksValidations;

  constructor(options: IAksFormConfig) {

    options.control ? this.control = options.control : this.throwError('control need to be defined');
    options.name ? this.name = options.name : this.throwError('name need to be defined');
    options.type ? this.type = options.type : this.throwError('type need to be defined');
    this.disabled = options.disabled || false;
    this.validations = options.validations || null;

  }


  throwError(msg) {
    throw new Error(msg);
  }

}
