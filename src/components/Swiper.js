import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper'
import data from './data'
import StatementCard from './StatementCard'

const colors = {
    red: '#ec2379',
    green: '#51EB4B',
    blue: '#0070FF',
    gray: '#7777777',
    black: '#000000',
    white: '#FFFFFF'
}

const Card = ({card}) => (
    <View style ={styles.card}>
        <Image source = {{uri: card.image}} style = {styles.cardImage}></Image>
        <Text>{card.name}</Text>
    </View>
)

const Swipe= (props) => {
    const navigation=useNavigation();
    const [index, setIndex] = useState(0);
    const[answer, setAnswer] = useState()
    const onSwipedLeft= () =>{
        setIndex((index+1)%data.length);
        setAnswer('Disagree')
    };
    const onSwipedRight= () =>{
        setIndex((index+1)%data.length);
        setAnswer('Agree')
    };
    const onSwipedTop= () =>{
        setIndex((index+1)%data.length);
        setAnswer('Super Agree')
    };
    const onSwipedBottom= () =>{
        setIndex((index+1)%data.length);
        setAnswer('Super Disagree')
    };
    return (
        <View >
        <View style = {styles.container}>
            <View style = {styles.swiperContainer}>
            <Swiper
                cards = {data}
                cardIndex={index}
                renderCard={(card) => <Card card={card}/>}
               // onSwiped = {onSwiped}
                onSwipedLeft = {onSwipedLeft}
                onSwipedRight = {onSwipedRight}
                onSwipedTop = {onSwipedTop}
                onSwipedBottom = {onSwipedBottom}
                stackSize= {4}
                stackScale = {5}
                stackSeparation = {5}
                backgroundColor= {'transparent'}
                animateOverlayLabelsOpacity
                animateCardOpacity
                infinite
                overlayLabels = {{
                    left: {
                        title: 'DISAGREE',
                        style: {
                            label: {
                                backgroundColor: colors.red,
                                color: colors.white,
                                fontSize: 24
                            },
                            wrapper: {
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-start',
                                marginTop: 20,
                                marginLeft: -20
                            }
                        }
                    },
                    right:{ 
                        title: 'AGREE',
                        style: {
                            label: {
                                backgroundColor: colors.green,
                                color: colors.white,
                                fontSize: 24
                         },
                             wrapper: {
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                marginTop: 20,
                                marginLeft: 20
                             }
                    }},
                    bottom: { 
                        title: 'SUPER DISAGREE',
                        style: {
                            label: {
                                backgroundColor: colors.red,
                                color: colors.white,
                                fontSize: 24
                            },
                            wrapper: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                marginTop: 20,   
                            }
                        }},
                    top: { 
                        title: 'SUPER AGREE',
                        style: {
                            label: {
                                backgroundColor: colors.green,
                                color: colors.white,
                                fontSize: 24
                            },
                            wrapper: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 20,
                                marginTop: -80,
                            }
                        }},
                    }}
                />
                </View>
                <Text>{index}{answer}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    card: {
        flex: 0.45,
        borderRadius: 8,
        shadowRadius: 25,
        shadowColor: "#000000",
        shadowOpacity: 0.08,
        shadowOffset: {width: 0, height: 0},
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingBottom: 20
    },
    cardImage: {
        width: 160,
        flex: 1,
        resizeMode :'contain'
    },
    swiperContainer: {
        flex: 0.45
    }
});

export default Swipe;