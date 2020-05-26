// import React from 'react';
// import { shallow, render } from 'enzyme';
// import renderer from 'react-test-renderer';
// import ReactTestUtils from 'react-dom/test-utils';
// import ReactDOM from 'react-dom'

// import EntryForm from './EntryForm';

// describe.skip('EntryForm', () => {
//   const onSubmit = jest.fn();

//   it('renders form to the page', () => {
//     const wrapper = shallow(<EntryForm onSubmit={onSubmit} />)
//     const entryForm = wrapper.find('#entry-form');

//     expect(entryForm.length).toBe(1);
//   })

//   it('renders a submit button for form', () => {
//     const wrapper = shallow(<EntryForm onSubmit={onSubmit} />)
//     const entryFormButton = wrapper.find('#entry-form-button');

//     expect(entryFormButton.length).toBe(1);
//   })

//   it('calls onSubmit when clicked', () => {
//     const wrapper = shallow(<EntryForm onSubmit={onSubmit} />)
//     const entryForm = wrapper.find('#entry-form-button');

//     entryForm.simulate('click');

//     expect(onSubmit).toHaveBeenCalled();
//   })

//   it('updates the input value when changed', () => {

//     let container;

//     container = document.createElement('div');
//     document.body.appendChild(container);
//     ReactDOM.render(<EntryForm />, container);

//     const input = container.querySelector('#entry-form');

//     expect(input.value).toBe('pickles')

//     input.value = 'new entry'
//     ReactTestUtils.Simulate.change(input)

//     expect(input.value).toBe('new entry')
//   })

//   it('submits current value of the input', () => {
//     let container;

//     container = document.createElement('div');
//     document.body.appendChild(container);
//     ReactDOM.render(<EntryForm onSubmit={onSubmit}/>, container);
//     const input = container.querySelector('#entry-form');
//     const button = container.querySelector('#entry-form-button');

//     input.value = 'IS IT THE END?'
//     ReactTestUtils.Simulate.change(input);
//     ReactTestUtils.Simulate.click(button);

//     expect(onSubmit).toHaveBeenCalledWith("IS IT THE END?")
//   })

// })
