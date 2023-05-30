import React, { useEffect, useReducer, useState, useRef } from 'react';
import { View, Button, Modal, Text, TextInput } from 'react-native';

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
        setTitleInput("");
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Modal
                style={{ alignItems: 'center', }}
                transparent={true}
                visible={showModal}
                onShow={() => {
                    inputRef.current.focus();
                }}
                onRequestClose={() => {
                    toggleModal();
                }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ alignItems: 'center', backgroundColor: 'white', width: 350 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center',  width: '100%', }}>


                                <Text
                                    style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginLeft: 'auto', marginRight: 'auto'}}>
                                    Title of the Day
                                </Text>


                                <Button
                                    title='X'
                                    onPress={toggleModal}
                                />

                        </View>
                        <View style={{ borderColor: 'black', borderWidth: 1, width: '60%', alignItems: 'center', justifyContent: 'center', }}>
                            <TextInput
                                style={{textAlign: 'center'}}
                                ref={inputRef}
                                onChangeText={(text) => setTitleInput(text)}
                            />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Button
                                title='Add'
                                disabled={titleInput.length === 0}
                                onPress={addNewDay}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}