import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import Container from '../Container';

it('renders its children', () => {
  const wrapper = shallow(
    <Container>
      <Text>Hello</Text>
      <Text>There!</Text>
    </Container>
  );
  expect(wrapper.find(Text).length).toEqual(2);
  expect(wrapper).toMatchSnapshot();
});
