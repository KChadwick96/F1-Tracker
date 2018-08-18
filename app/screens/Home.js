import React from 'react';
import { Font } from 'expo';
import { View, Text, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Container from '../components/Container';
import TopBackground from '../components/TopBackground';
import Countdown from '../components/Countdown';
import Card from '../components/Card';
import StandingsBar from '../components/StandingsBar';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Font.loadAsync({
            'Raleway': require('../fonts/Raleway-Regular.ttf'),
            'Raleway-Medium': require('../fonts/Raleway-Medium.ttf'),
            'Raleway-Bold': require('../fonts/Raleway-Bold.ttf')
        });
        this.setState({ loading: false });
    }

    handleNextRacePress = () => {
        this.props.navigation.navigate('Race', { title: 'Next Race' });
    }

    handleLastRacePress = () => {
        this.props.navigation.navigate('Race', { title: 'Previous Race' });
    }

    handleStandingsPress = () => {

    }

    render() {
        if (this.state.loading) return null;

        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <TopBackground height={210} />
                <Countdown title="Next Race" countdownTo={new Date()} />
                <Card
                    name="Up Next"
                    title="Belgium Grand Prix"
                    description="Something blah blah"
                    actionText="Expand"
                    onActionPress={() => this.handleNextRacePress()}
                />
                <Card
                    name="Last Race"
                    title="Hungarian Grand Prix"
                    description="Hungaroring"
                    actionText="Expand"
                    onActionPress={() => this.handleLastRacePress()}
                />
                <Card
                    name="Last Race"
                    actionText="View Standings"
                    onActionPress={() => this.handleStandingsPress()}
                >
                    <StandingsBar 
                        width={250}
                        backgroundColor="red"
                        color="white"
                        points={100}
                        name="Lewis Hamilton"
                    />
                    <StandingsBar 
                        width={200}
                        backgroundColor="red"
                        color="white"
                        points={100}
                        name="Sebastian Vettel"
                    />
                </Card>
            </Container>
        );
    }
}

export default createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },
    Race: {
        screen: () => <View><Text>Race</Text></View>
    }
})