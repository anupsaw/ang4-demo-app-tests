import { IAksFormConfig } from '@aksfw/forms';

export const formConfig: Array<IAksFormConfig> = [{
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
