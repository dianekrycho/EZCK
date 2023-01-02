import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, Surface, TextInput, Title, Text } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { Login } from '../store/actions';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const submit = () => {
        dispatch(Login(username, password))
    }
    return (
        <View style={styles.container}>
            <Image style={StyleSheet.absoluteFillObject} source={require('../bottomTabsIcon/logo.png')} blurRadius={5} />
            <Text style={styles.title}>Login</Text>
            <Surface style={styles.box}>
                <View>
                    <TextInput
                        label="Username"
                        mode="outlined"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        label="Password"
                        mode="outlined"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Button
                    mode="contained"
                    color='blue'
                    style={{ marginTop: 20 }}
                    onPress={submit}>
                    Submit
                </Button>
            </Surface>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 28,
        backgroundColor:'blue',
    },
    box: {
        borderRadius: 10,
        elevation: 5,
        padding: 20,
        height: 250,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
        fontWeight: 'bold'
    }
})