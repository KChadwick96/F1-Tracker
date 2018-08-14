import React from 'react';
import { Text } from 'react-native';

import Container from './components/Container';
import Countdown from './components/Countdown';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Countdown title="Next Race" countdownTo={new Date()} />
                <Text>yo</Text>
            </Container>
        );
  }
}