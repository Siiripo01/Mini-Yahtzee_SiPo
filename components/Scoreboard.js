import React, {useState, useEffect} from "react";
import {Text, View} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SCOREBOARD_KEY} from '../constants/Game';
import styles from '../style/Style';

export default ScoreBoard = ( {navigation} ) => {

    const [scores, setScores] = useState([]);

    useEffect(() => {
        const unsub = navigation.addListener('focus', () =>{

        });
    }, [navigation])

    const getScoreboardData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY)
            if (jsonValue !== null) {
                let tmpScores = JSON.parse(jsonValue);
                setScores(tmpScores);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
    return (
        <View style={styles.header}>
            <Header/>
            <View>
                {scores.map((player, i) => (
                    <Text key={i}>{i + 1}. {player.name} {player.date} {player.time} {player.points}</Text>
                ))}
            </View>
        </View>
    )
}