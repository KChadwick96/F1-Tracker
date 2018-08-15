import React from 'react';
import { StatusBar, Text } from 'react-native';

import Container from './components/Container';
import TopBackground from './components/TopBackground';
import Countdown from './components/Countdown';
import Card from './components/Card';

export default class App extends React.Component {

    handleNextRacePress = () => {

    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <TopBackground height={185} />
                <Countdown title="Next Race" countdownTo={new Date()} />
                <Card
                    name="Up Next"
                    title="Belgium Grand Prix"
                    description="Something blah blah"
                    actionText="Expand"
                    onActionPress={() => this.handleNextRacePress()}>
          
                </Card>
            </Container>
        );
    }
}