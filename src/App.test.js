import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import FormComponent from './FormComponent';

const input = require('./input.json');

const output = {
  "name":"Jane Doe",
  "dob":"1975-06-11",
  "gender":"2",
  "contact": {
    "mobile":"4564212312",
    "home":"45485656"
  }
};

afterEach(cleanup);

test('that Form renders all required inputs and selection', () => {
  render(<App />);
  const nameInput = screen.getByLabelText('name');
  expect(nameInput).toBeInTheDocument();

  const dobInput = screen.getByLabelText('dob');
  expect(dobInput).toBeInTheDocument();

  const genderSelect = screen.getByLabelText('gender');
  expect(genderSelect).toBeInTheDocument();

  const homeContactInput = screen.getByLabelText('home');
  expect(homeContactInput).toBeInTheDocument();

  const mobileContactInput = screen.getByLabelText('mobile');
  expect(mobileContactInput).toBeInTheDocument();

  const guardianInput = screen.getByLabelText('guardian');
  expect(guardianInput).toBeInTheDocument();
});

test('alerts on submit click', async () => {
  const { getByLabelText } = render(<App />);
  global.alert = jest.fn();
  
  const button = getByLabelText('button');
  fireEvent.click(button);
  
  expect(global.alert).toHaveBeenCalledTimes(1);
});

test('submitting the Form', () => {
  const onSubmit = jest.fn();
  const { getByLabelText } = render (
    <FormComponent input={input} output={onSubmit} />
  );

  const nameInput = getByLabelText('name');
  fireEvent.change(nameInput, {target: {value: "Jane Doe" } });

  const dobInput = getByLabelText('dob');
  fireEvent.change(dobInput, {target: {value: "1975-06-11" } });

  const genderInput = getByLabelText('gender');
  fireEvent.change(genderInput, {target: {value: "2" } });

  const mobileInput = getByLabelText('mobile');
  fireEvent.change(mobileInput, {target: {value: "4564212312" } });

  const homeInput = getByLabelText('home');
  fireEvent.change(homeInput, {target: {value: "45485656" } });
});


