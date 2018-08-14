import React from 'react';
import { StatusBar, Text } from 'react-native';

import Container from './components/Container';
import TopBackground from './components/TopBackground';
import Countdown from './components/Countdown';
import Card from './components/Card';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <TopBackground height={200} />
                <Countdown title="Next Race" countdownTo={new Date()} />
                <Card title="Up Next">
                    <Text>Belgium Grand Prix</Text>
                </Card>
            </Container>
        );
  }
}