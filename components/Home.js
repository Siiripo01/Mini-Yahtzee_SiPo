import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import styles from '../style/Style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NBR_OF_DICES, NBR_OF_THROWS, MAX_SPOT, MIN_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS } from '../constants/Game'

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
            <Header/>

            { !hasPlayerName
                ?
                <>
                    <View style={styles.home}>

                        <MaterialCommunityIcons name="account-circle" size={70} color="#6b49a0"/>

                        <Text>Enter your name for the scoreboard please:</Text>

                        <TextInput onChangeText={setPlayerName} autoFocus={true}></TextInput>

                        <Pressable onPress={() => handlePlayerName(playerName)} style={styles.button}>
                            <Text style={styles.buttonText}>OK</Text>
                        </Pressable>
                    </View>

                    <Footer/>
                </>
                :
                <>
                    <View style={styles.home}>
                        <Text style={styles.home}>
                            THE GAME: Upper section of the classic Yahtzee dice game. You have {NBR_OF_DICES} dices and for the every dice you have {NBR_OF_THROWS} throws. After each throw you can keep dices in order to get same dice spot counts as many as possible. In the end of the turn you must select your points from {MIN_SPOT} to {MAX_SPOT}. Game ends when all points have been selected. The order for selecting those is free.
                        </Text>
                        <Text style={styles.home}>
                            POINTS: After each turn game calculates the sum for the dices you selected. Only the dices having the same spot count are calculated. Inside the game you can not select same points from {MIN_SPOT} to {MAX_SPOT} again.
                        </Text>
                        <Text style={styles.home}>
                            GOAL: To get points as much as possible. {BONUS_POINTS_LIMIT} points is the limit of getting bonus which gives you {BONUS_POINTS} points more.
                        </Text>

                        <Text style={styles.home}>Good luck, {playerName}!</Text>

                        <Pressable onPress={() => navigation.navigate('Gameboard', {player: playerName})} style={styles.button}>
                            <Text  style={styles.buttonText}>PLAY</Text>
                        </Pressable>
                    </View>

                    <Footer/>
                </>
            }
        </View>
    )
}