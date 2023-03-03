import React, { useState, useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/Style';
import { NBR_OF_DICES, NBR_OF_THROWS, MAX_SPOT } from '../constants/Game'
import { Col, Grid } from 'react-native-easy-grid';

let board = [];

export default Gameboard = ({ route }) => {
    
    const [playerName, setPlayerName] = useState('');
    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [status, setStatus] = useState('');

    // This array has the information whether dice is selected or not.
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));

    // This array has dice spots for a throw.
    const [diceSpots, setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));

    // *** FOR POINTS ROW IN THE BOTTOM
    // This array has total points different spot counts.
    const [dicePointsTotal, setDicePointsTotal] = useState(new Array(MAX_SPOT).fill(0));

    // *** FOR SPOT COUNTS IN THE BOTTOM
    // This array has the information whether the spot count has been selected or not.
    const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(false)); 

    const row = [];
    for (let i = 0; i < NBR_OF_DICES; i++) {
      row.push(
        <Pressable 
            key={"row" + i}
            onPress={() => selectDice(i)}>
          <MaterialCommunityIcons
            name={board[i]}
            key={"row" + i}
            size={50} 
            color={getDiceColor(i)}>
          </MaterialCommunityIcons>
        </Pressable>
      );
    }

    const pointsRow = [];
    for (let spot = 0; spot < MAX_SPOT; spot++) {
        pointsRow.push (
            <Col key={"points" + spot}>
                <Text key={"points" + spot} style={styles.points}>{getSpotTotal(spot)}</Text>
            </Col>
        )

    }

    const buttonsRow = [];
    for ( let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
        buttonsRow.push(
            <Col key={"buttonsRow" + diceButton}>
                <Pressable
                    onPress={() => selectDicePoints(diceButton)}
                    key={"buttonsRow" + diceButton}>
                    <MaterialCommunityIcons
                        name={"numeric-" + (diceButton + 1) + "-circle"}
                        key={"buttonsRow" + diceButton}
                        size={40}
                        color={getDicePointsColor(diceButton)}>
                    </MaterialCommunityIcons>
                </Pressable>
            </Col>
        )
    }

    useEffect(() => {
        if (playerName === '' && route.params?.player) {
            setPlayerName(route.params.player);
        }
    }, []);

    function getDiceColor(i) {
        return selectedDices[i] ? "black" : "steelblue";
    }

    function getDicePointsColor(i) {
        return selectedDicePoints[i] ? "black" : "steelblue";
    }

    function selectDice(i) {
        let dices = [...selectedDices];
        dices[i] = selectedDices[i] ? false : true;
        setSelectedDices(dices);
    }

    function getSpotTotal(i) {
        return dicePointsTotal[i];
    }

    // function selectDicePoints(i) {
    //     let selected = [...selectedDices];
    //     let selectedPoints = [...selectedDicePoints];
    //     let points = [...dicePointsTotal];

    //     if (!selectedPoints[i]) {
    //         selectedDicePoints[i] = true;
    //         let nbrOfDices = diceSpots.reduce((total, x) => (x === (i + 1) ? total + 1: total), 0);
    //         points[i] = nbrOfDices * (i + 1);
    //         setDicePointsTotal(points);
    //     }

    //     selected.fill(false);
    //     setSelectedDices(selected);
    //     setSelectedDicePoints(selectedPoints);
    //     setNbrOfThrowsLeft(NBR_OF_THROWS)
    //     return points[i];
    // }

    function selectDicePoints(i) {
        let selected = [...selectedDices];
        let selectedPoints = [...selectedDicePoints];
        let points = [...dicePointsTotal];

        if (!selectedPoints[i]) {
            selectedDicePoints[i] = true;
            let nbrOfDices = diceSpots.reduce((total, x) => (x === (i + 1) ? total + 1: total), 0);
            points[i] = nbrOfDices * (i + 1);
            setDicePointsTotal(points);
        }

        selected.fill(false);
        setSelectedDices(selected);
        setNbrOfThrowsLeft(NBR_OF_THROWS)
        return points[i];
        setSelectedDicePoints(selectedPoints);
    }

    function throwDices() {
        let spots = [...diceSpots];
        for (let i = 0; i < NBR_OF_DICES; i++) {
            if (!selectedDices[i]) {
                let randomNumber = Math.floor(Math.random() * 6 + 1);
                board[i] = 'dice-' + randomNumber;
                spots[i] = randomNumber;
            }
        }
        setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
        setDiceSpots(spots);
        setStatus('Select and throw dices again');
    }

    // JOTAIN PITÄÄ KORJATA TÄÄLLÄ!
    return (
        <View style={styles.gameboard}>
            <View style={styles.flex}>{row}</View>
            <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
            <Text style={styles.gameinfo}>{status}</Text>
            <Pressable style={styles.button}
                onPress={() => throwDices()}>
                <Text style={styles.buttonText}>
                    Throw dices
                </Text>
            </Pressable>
            <View style={styles.dicepoints}><Grid>{pointsRow}</Grid></View>
            <View style={styles.dicepoints}><Grid>{buttonsRow}</Grid></View>
            <Text>Player: {playerName}</Text>
        </View>
    )
}