import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

import Container from '../Container';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <Container>
      <Text>Hello</Text>
      <Text>There</Text>
    </Container>
  ).toJSON();
  expect(rendered.children.length).toEqual(2);
});
