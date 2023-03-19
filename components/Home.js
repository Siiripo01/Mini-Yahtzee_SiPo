import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import styles from '../style/Style';

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
            <Text>Mini-Yahtzee</Text>

            { !hasPlayerName
                ?
                <>
                    <Text>Enter your name for the scoreboard...</Text>

                    <TextInput onChangeText={setPlayerName} autoFocus={true}></TextInput>

                    <Pressable onPress={() => handlePlayerName(playerName)} style={styles.button}>
                        <Text style={styles.buttonText}>OK</Text>
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