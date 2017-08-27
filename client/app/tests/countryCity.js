
import React from 'react';
import { CountryCity } from '../components/countryCity';
// import { CountryCity } from '../components/componetTest';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';


// http://redux.js.org/docs/recipes/WritingTests.html how to test the redux 
test('<CountryCity />', () => {

  // const component = mount(
  //   <CountryCity />
  // );
  const component = renderer.create(
    <CountryCity />
  );
 
  let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  expect(tree).toContain('<div>');
  expect(2 + 2).toBe(4);
});
