import React, { useEffect, useReducer, useState, useRef } from 'react';
import { View, Button, Modal, Text, TextInput } from 'react-native';

const reducer = (state, action) => {
    if (action.type === 'addDay') {
        return {
            ...state,
            days: [...state.days, {title:action.value}]
        }
    }
};

export default CreateNew = ({ navigation }) => {
    const [state, dispatch] = useReducer(reducer, {
        days: []
    });

    const [showModal, setShowModal] = useState(false);
    const [titleInput, setTitleInput] = useState("")

    const inputRef = useRef();

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const addNewDay = () => {
        dispatch({
            type: 'addDay',
            value: titleInput
        });
        toggleModal();
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

    console.log(state.days)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Modal
                style={{ alignItems: 'center', }}
                transparent={true}
                visible={showModal}
                onShow={() => {
                    inputRef.current.focus();
                }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ alignItems: 'center', backgroundColor: 'white',}}>
                        <Text>Title</Text>
                        <TextInput
                            ref={inputRef}
                            onChangeText={(text) => setTitleInput(text)}
                        />
                        <Button
                            title='Add'
                            onPress={addNewDay}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}