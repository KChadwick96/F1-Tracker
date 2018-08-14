import React from 'react';
import { shallow } from 'enzyme';

import Countdown from '../Countdown';

const component = <Countdown title="Next Race" countdownTo={new Date()} />;

it('renders correctly', () => {
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
});