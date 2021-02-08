import { fireEvent,  render } from '@testing-library/react';
import App from './App';
import FormComponent from './FormComponent';

test('renders form without crash', () => {

  const {getByTestId, queryAllByTestId, getAllByTestId} = render(<App />);
  const form = getByTestId('form');
  expect(form).toBeInTheDocument();
  expect(getByTestId('inputName')).toBeTruthy();

  const inputName = getByTestId('inputName');

  fireEvent.change(inputName, {target: {value: 'John Doe'}});
  expect(inputName.value).toBe('John Doe');
  
  const guardian = queryAllByTestId('guardian');
  expect(guardian[0]).toBeFalsy();

  const checkbox = getByTestId('checkbox');
  expect(checkbox).toBeTruthy();
  fireEvent.change(checkbox);

  expect(guardian).toBeTruthy();

});

it('alerts on submit click', async () => {
  const {getByTestId} = render(<App />);
  global.alert = jest.fn();
  
  const button = getByTestId('button');
  fireEvent.click(button);

  expect(global.alert).toHaveBeenCalledTimes(1);
})
