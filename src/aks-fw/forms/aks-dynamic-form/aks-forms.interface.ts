
import { AksElementType } from '../componentService/aks-forms-component.service';


export interface IAksFormConfig {

  control: string;
  name: string;
  type: string;
  disabled?: boolean;
  validations?: IAksValidations;
}

export interface IAksValidations {
  required?: boolean;
}





