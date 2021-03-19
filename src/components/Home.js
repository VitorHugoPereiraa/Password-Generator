import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Clipboard from 'expo-clipboard'
import * as ScreenOrientation from 'expo-screen-orientation'


const Home = () => {

    const [characters, setCharacter] = useState(6)
    const [password, setPassword] = useState('')
    const [copy, setCopy] = useState(false)

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"


    function generatePass() {
        let pass = ''
        for (let i = 0, n = charset.length; i < characters; i++) {
            pass += charset.charAt(Math.floor(Math.random() * n))
        }
        setCopy(false)
        setPassword(pass)

    }

    function copyPass(){
        Clipboard.setString(password)
        setCopy(true)
    }

    return (
        <View style={styles.container}>
            <FontAwesome name="lock" size={150} color="orange" style={styles.lock} />

            <View style={styles.containerCharacters}>
                <Text style={styles.characters}>
                    {characters} Characters
                </Text>
            </View>

            <View style={styles.containerSlider}>
                <Slider
                    styles={styles.slider}
                    minimumValue={6}
                    maximumValue={15}
                    minimumTrackTintColor="orange"
                    maximumTrackTintColor="#000000"
                    value={characters}
                    onValueChange={value => setCharacter(value.toFixed(0))}
                />
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity onPress={generatePass} style={styles.button}>
                    <Text style={styles.buttonText}>Generate Password</Text>
                </TouchableOpacity>
            </View>

            {
                password != "" && (
                    <View style={styles.containerPassword}>
                        {
                            copy ?
                        <Text style={styles.copyTrue}>Copied! <MaterialIcons name="verified" size={15} /></Text>
                        :
                        <Text style={styles.copy}>Press to copy!</Text>
                        }
                        <View style={styles.containerPasswordCharacters}>
                            <Text onLongPress={copyPass} style={styles.password}>{password}</Text>
                        </View>
                    </View>
                )
            }



        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E90FF',
    },
    lock: {
        alignSelf: 'center',
        marginTop: 50
    },
    containerCharacters: {
        width: "100%",
        alignItems: 'center',
        marginTop: 30
    },
    characters: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    containerSlider: {
        width: "100%",
        height: 80,
        padding: 20
    },
    slider: {
        width: 200,
        height: 40
    },
    containerButton: {
        width: "100%",
        alignItems: 'center',
    },
    button: {
        borderWidth: 2,
        borderColor: '#1E90FF',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: "orange"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    containerPassword: {
        width: "100%",
        alignItems: 'center',
        marginTop: 30
    },
    copy: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 10
    },
    copyTrue: {
        color: "green",
        fontSize: 18,
        marginBottom: 10
    },
    containerPasswordCharacters: {
        backgroundColor: "rgba(255,255,255,0.5)",
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    password: {
        fontSize: 20,
    }

});

export default Home;