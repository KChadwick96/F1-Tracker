import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import Card from '../Card';

const component = <Card title="Up Next">
    <Text>Hello</Text>
</Card>;

it('renders correctly', () => {
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
});