
import { AksElementType } from '../componentService/aks-forms-component.service';


export interface AksFormConfig {

  control: string;
  name: string;
  type: string;
  validations?: AksValidations;
}

export interface AksValidations {
  required?: boolean;
}





