import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Track from './pages/Track';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none" 
                screenOptions={{
                    cardStyle: {
                        backgroundColor: 'white'
                    }
                }}
            >
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Track" component={Track}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes