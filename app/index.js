import React from 'react';
import { StatusBar } from 'react-native';

import Container from './components/Container';
import TopBackground from './components/TopBackground';
import Countdown from './components/Countdown';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <StatusBar translucent={false} />
                <TopBackground height={200} />
                <Countdown title="Next Race" countdownTo={new Date()} />
            </Container>
        );
  }
}