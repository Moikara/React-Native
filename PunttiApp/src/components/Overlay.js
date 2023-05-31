import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';

export default Overlay = ({ show, toggle, dispatch }) => {
    const [input, setInput] = useState("");
    const inputRef = useRef();

    return (
        show
        &&
            <Modal
                style={{ alignItems: 'center', }}
                transparent={true}
                onShow={() => {
                    inputRef.current.focus();
                }}
                onRequestClose={() => {
                    toggle();
                }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ alignItems: 'center', backgroundColor: 'white', width: 350 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', }}>
                            <Text
                                style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginLeft: 'auto', marginRight: 'auto' }}>
                                Title of the Day
                            </Text>
                            <Button
                                title='X'
                                onPress={toggle}
                            />
                        </View>
                        <View style={{ borderColor: 'black', borderWidth: 1, width: '60%', alignItems: 'center', justifyContent: 'center', }}>
                            <TextInput
                                style={{ textAlign: 'center' }}
                                ref={inputRef}
                            />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Button
                                title='Add'
                            />
                        </View>
                    </View>
                </View>
            </Modal>
    )
}

