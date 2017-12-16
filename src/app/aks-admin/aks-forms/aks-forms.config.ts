export const config: Array<AksFormConfig> = [{
  control: 'input',
  name: 'foodName',
  type: 'text',
  validations: {
    required: true
  }
},
{
  control: 'textarea',
  name: 'foodName',
  type: 'text'
}];


export interface AksFormConfig {

  control: string;
  name: string;
  type: string;
  validations?: AskValidations;
}

export interface AskValidations {
  required?: boolean;
}
