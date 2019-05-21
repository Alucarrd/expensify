import React from 'react';
//react-rest-renderer
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('Should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  //expect(wrapper.find('h1').length).toBe(1);
  //expect(wrapper.find('h1').text()).toBe('Expensify');
});
