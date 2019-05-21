import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}

    />
  );
});

test('Should render expense list filter correct', () => {
  expect(wrapper).toMatchSnapshot();
})

test('Should render expense list filter to alt filter correct', () => {
  console.log(altFilters);
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();

});

//should handle text change
test('Should handle text change', () => {
  const value = 'Credit Card';
  expect(wrapper).toMatchSnapshot();
  //since there's only one input, you dun need to use at(0)

  wrapper.find('input').simulate('change', {
    target: {value}
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);

});


//should sort by amount
test('should sort by amount', () => {
  const value = 'amount';
  expect(wrapper).toMatchSnapshot();
  wrapper.find('select').at(0).simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();

});
//should sort by date
test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  })
  const value = 'date';
  expect(wrapper).toMatchSnapshot();
  wrapper.find('select').at(0).simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();

});
//should handle date changes
test('should handle date change', () => {
  const startDate = moment().startOf('year');
  const endDate = moment().endOf('year');
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})


//should handle date focus change
test('should handle date focus change', () => {
  const calendarFocused = "endDate";
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})
