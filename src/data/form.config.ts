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
  control: 'input',
  name: 'foodType',
  type: 'text'
},
{
  control: 'input',
  name: 'foodTaste',
  type: 'text'
}];
