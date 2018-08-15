import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import Text from '../Text';

const component = <Text.Regular>Hello</Text.Regular>

it('renders correctly', () => {
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
});