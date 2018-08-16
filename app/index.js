import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Font } from 'expo';
import { createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Container from './components/Container';
import TopBackground from './components/TopBackground';
import Countdown from './components/Countdown';
import Card from './components/Card';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Font.loadAsync({
            'Raleway': require('./fonts/Raleway-Regular.ttf'),
            'Raleway-Medium': require('./fonts/Raleway-Medium.ttf'),
            'Raleway-Bold': require('./fonts/Raleway-Bold.ttf')
        });
        this.setState({ loading: false });
    }

    handleNextRacePress = () => {

    }

    handleLastRacePress = () => {

    }

    render() {
        if (this.state.loading) return null;

        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <TopBackground height={220} />
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
            </Container>
        );
    }
}

export default createBottomTabNavigator({
    Home,
    Season: () => {
        return <View>
            <Text>Season</Text>
        </View>
    }
}, {
    navigationOptions: {

    },
    tabBarOptions: {
        activeTintColor: 'yellow',
        inactiveTintColor: 'gray',
    }
});