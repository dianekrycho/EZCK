import AsyncStorage from "@react-native-async-storage/async-storage";
import SQLite from 'react-native-sqlite-storage';

/*
const db = SQLite.openDatabase(
    {
      name: 'MainDB',
      location: 'default',
    },
    () => { },
    error => { console.log(error) }
);
const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        + "Users "
        + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Password TEXT);"
    )
  })
}
const getUsers = () =>{
  try {
    const users = []
    db.transaction((tx) => {
      tx.executeSql(
          "SELECT Name FROM Users",
          [],
          (tx, results) => {
            const len = results.rows.length;
            if (len > 0) {
              for (let i = 0; i < results.rows.length; i++) {
                users.push(results.rows.item(i));
              }
              console.log(users);
            }
          }
      )
    })
  } catch (error) {
    console.log(error);
  }
}

const passwordCheck = (userName) => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
          "SELECT Password FROM Users WHERE Name=${userName}",
          [],
          (tx, results) => {
            const len = results.rows.length;
            if (len > 0) {
              rows.forEach((row) => {
                userCheck.push({
                  userName:results.rows.item(0).Name,
                  password:results.rows.item(0).Password
                })
                console.log(row.name, row.Password);
              });
            }
          }
      )
    })
  } catch (error) {
    console.log(error);
  }
}
 */

export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }
}

export const Login = (username, password) => {
  return async dispatch => {
    //createTable()

    let token = null;
    if (username === 'diane' && password == 'diane') {
      token = username + "+" + password;
      // here we can use login api to get token and then store it
      await AsyncStorage.setItem('token', token);
      console.log('token stored');
    }
    dispatch({
      type: 'LOGIN',
      payload: token,
    })
  }
}

export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT'
    })
  }
}