import * as React from 'react';
import { shallow } from 'enzyme';
import { CheckboxWithLabel } from './CheckboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<CheckboxWithLabel on='on' off='off' />);
  expect(checkbox.text()).toEqual('off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('on');
});