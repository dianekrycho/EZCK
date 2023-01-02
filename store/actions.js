import AsyncStorage from "@react-native-async-storage/async-storage";

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
    let token = null;
    if (username === 'Diane' && password == 'Diane' || username === 'Paul-Eloi' && password == 'Paul-Eloi' || username === 'Alban' && password == 'Alban'|| username === 'Enzo' && password == 'Enzo') {
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