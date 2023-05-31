import React from 'react';
import { View, Button } from 'react-native';

export default Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Create a Cycle"
                onPress={() => navigation.navigate('CreateNew')}
            />
        </View>
    )
}