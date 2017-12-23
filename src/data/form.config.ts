import { AksFormConfig } from '@aksfw/forms';

export const formConfig: Array<AksFormConfig> = [{
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
