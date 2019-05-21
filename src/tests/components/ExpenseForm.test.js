import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

})


//should render expenseForm with data
test('should render expense form with data.', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
});

//https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
test('should render error when invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  //this will try to match snapshot before the submission
  expect(wrapper).toMatchSnapshot();
  //simulate can do click/submit
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  //this will try to match snapshot after submission
  expect(wrapper).toMatchSnapshot();
});


test('Should set description on input change', () => {
  const value = 'New Description'
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  //find the first input
  //the second parameters is what will be passed in as e
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

//should set note on textarea change
test('Should set note on textarea change', () => {
  const value = "My New Note";
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});


//change valid amount 23.50 as example
test('Should set state with invalid amount input', () => {
  const value = "23.30";
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value)
  expect(wrapper).toMatchSnapshot();
});

//change to invalid amount, as example, 12.222

test('Should not set state with invalid amount input', () => {
  const value = "12.122";
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('')
  expect(wrapper).toMatchSnapshot();
});

//
test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  //onSubmitSpy('Peter', 'Irvine');
  //expect(onSubmitSpy).toHaveBeenCalledWith('Peter', 'Irvine');
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  //we can't just pass the expense object in, because the expense object has id
  //so we will need to send in individual attribute minus id
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[1].description,
    amount: expenses[1].amount,
    note: expenses[1].note,
    createdAt: expenses[1].createdAt
  });

});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);

});

//should set calendarFocused on change

test('Should set calendarFocused to true', () => {
  const newState = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:newState});
  expect(wrapper.state('calendarFocused')).toBe(newState);
});
