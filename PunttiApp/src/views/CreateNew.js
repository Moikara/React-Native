import React, { useEffect, useReducer, useState } from 'react';
import { Button } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CycleContext } from '../contex/CycleContext';

import Day from './Day';

const Tab = createBottomTabNavigator();

const reducer = (state, action) => {
    if (action.type === 'addDay') {
        return {
            ...state,
            days: [...state.days, { title: action.value }]
        }
    }
};

export default CreateNew = ({ navigation }) => {
    const [state, dispatch] = useReducer(reducer, {
        days: [
            { title: 'Ma' },
            { title: 'Ti' },
            { title: 'To' },
            { title: 'Pe' }
        ]
    });

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    title="Add a Day"
                    onPress={toggleModal}
                />
            ),
        });
    }, [navigation]);

    return (
        <CycleContext.Provider value={{ state, dispatch }}>
            <Tab.Navigator>
                {state.days.map((day) => {
                    return (
                        <Tab.Screen
                            key={day.title}
                            name={day.title}
                            component={Day}
                        />
                    )
                })}
            </Tab.Navigator>
        </CycleContext.Provider>
    )
}