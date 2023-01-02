import SQLite  from 'react-native-sqlite-storage';
import React, { useEffect } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
    Text,
} from 'react-native';
import {useState} from "react";

const db = SQLite.openDatabase(
    {
        name: 'EZCKdb',
        location: 'default',
        //createFromLocation: '~SQLite.db',
    },
    () => { },
    error => {
        console.log("ERROR: " + error);
    }
);


const createTable = ()=>{
    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_password VARCHAR(20)',
                            []
                        );
                    }
                }
            );
        });
    }, []);
}

const ViewAllUser = () => {
    let [ListItems, setListItems] = useState([]);
    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user',
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setListItems(temp);
                }
            );
        });
    }, []);
}

const RegisterUser = ({ navigation }) => {
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');

    let register_user = () => {
        console.log(userName, password);
        if (!userName) {
            alert('Please fill username');
            return;
        }
        if (!password) {
            alert('Please fill password');
            return;
        }
        db.transaction(function (tx) {
            tx.executeSql(
                'INSERT INTO table_user (user_name, password) VALUES (?,?,?)',
                [userName, password],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'You are Registered Successfully',
                            /*[
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('LoginScreen'),
                                },
                            ],*/
                            {cancelable: false}
                        );
                    } else {
                        alert('Registration Failed')
                    };
                }
            );
        });
    };
};

const ViewUser = () => {
    let [inputUserId, setInputUserId] = useState('');
    let [userData, setUserData] = useState({});

    let searchUser = () => {
        console.log(inputUserId);
        setUserData({});
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where user_id = ?',
                [inputUserId],
                (tx, results) => {
                    const len = results.rows.length;
                    console.log('len', len);
                    if (len > 0) {
                        setUserData(results.rows.item(0));
                    } else {
                        alert('No user found');
                    }
                }
            );
        });
    };
}

export default {createTable, ViewAllUser, RegisterUser, ViewUser}