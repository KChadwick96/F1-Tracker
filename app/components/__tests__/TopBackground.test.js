import React from 'react';
import { shallow } from 'enzyme';

import TopBackground from '../TopBackground';

const component = <TopBackground height={100} />;

it('renders correctly', () => {
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
});