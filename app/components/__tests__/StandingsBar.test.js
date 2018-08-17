import React from 'react';
import { shallow } from 'enzyme';

import StandingsBar from '../StandingsBar';

const component = <StandingsBar 
    width={180}
    backgroundColor="red"
    color="white"
    points={100}
    name="Lewis Hamilton"
/>;

it('renders correctly', () => {
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
});