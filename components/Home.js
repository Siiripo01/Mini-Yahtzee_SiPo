import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';

export default Home = ({ navigation }) => {

    const [playerName, setPlayerName] = useState('');
    const [hasPlayerName, setHasPlayerName] = useState(false);

    // Check that the user has typed atleast one character.
    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

    return (
        <View>
            <Text>Home will be here...</Text>

            { !hasPlayerName
                ?
                <>
                    <Text>Enter your name for the scoreboard please</Text>

                    <TextInput onChangeText={setPlayerName} autoFocus={true}></TextInput>

                    <Pressable onPress={() => handlePlayerName(playerName)}>
                        <Text>OK</Text>
                    </Pressable>
                </>
                :
                <>
                    <Text>Rules of the game here...</Text>
                    <Text>Good luck, {playerName}!</Text>

                    <Pressable onPress={() => navigation.navigate('Gameboard', {player: playerName})}>
                        <Text>PLAY</Text>
                    </Pressable>
                </>
            }
        </View>
    )
}