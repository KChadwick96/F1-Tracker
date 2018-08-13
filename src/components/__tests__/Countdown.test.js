// should take title and render
// should take date to countdown to

import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import Countdown from '../Countdown';

const component = <Countdown title="Next Race" />;

it('renders correctly', () => {
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
});

it('displays the title', () => {
    const clone = React.cloneElement(component);
    const wrapper = shallow(clone);
    expect(wrapper.find(Text).contains('Next Race')).toBeTruthy();
});

it('shows the countdown in the right format', () => {
    const clone = React.cloneElement(component);
    const wrapper = shallow(clone).render();

    console.log(wrapper);
    //console.log(wrapper.find(Text).last().);
    //expect(wrapper.find(Text).last().text).toBeTruthy();
});
