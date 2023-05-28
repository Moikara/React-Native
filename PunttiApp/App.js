import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/Home';
import CreateNew from './src/views/CreateNew';

const Stack = createNativeStackNavigator();

export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='CreateNew' component={CreateNew} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}