import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const usersActions = {
    signUp: (objUser) => {
        console.log(objUser);
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`https://macchiatoapp.herokuapp.com/api/auth/signUp`, { objUser })
                console.log(res.data);
                dispatch({
                    type: "message",
                    payLoad: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })

            } catch (err) {
                console.log(err);
            }
        }
    },
    signIn: (objUser) => {
        console.log("----------_________-------------");
        console.log(objUser);
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`https://macchiatoapp.herokuapp.com/api/auth/signIn`, { objUser })
                console.log(res.data);
                if (res.data.success) {
                    // AsyncStorage.setItem("token", res.data.response.token)
                    dispatch({ type: "user", payLoad: res.data })
                    dispatch({
                        type: "message", payLoad: {
                            view: true,
                            message: res.data.message,
                            success: res.data.success
                        }
                    })
                    dispatch({ type: "verified", payLoad: res.data.response.validate })
                } else {
                    dispatch({
                        type: "message",
                        payLoad: {
                            view: true,
                            message: res.data.message,
                            success: res.data.success
                        }
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    signOut: (userEmail) => {
        // console.log(userEmail)
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`https://macchiatoapp.herokuapp.com/api/auth/signOut`, { userEmail })
                AsyncStorage.removeItem("token")
                dispatch({
                    type: "userSignOut", payLoad: {
                        view: true,
                        message: res.data.message
                    }
                })


            } catch (err) {
                console.log(err)
            }

        }
    },
    verifyToken: (token) => {
        console.log("esto es el token -------------------------------------qwrfsgfshddfsdfasd");
        console.log(token);
        console.log("esto es el token -------------------------------------qwrfsgfshddfsdfasd");
        return async (dispatch, getState) => {
            try {

                const res = await axios.get(`https://macchiatoapp.herokuapp.com/api/auth/signInToken`, {
                    headers: {
                        Authorization: "Bearer " + token   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                    }
                })

                if (res.data.success) {
                    dispatch({ type: "user2", payLoad: res.data.response })
                    dispatch({
                        type: "message",
                        payLoad: {
                            token,
                            view: true,
                            message: res.data.message,
                            success: res.data.success
                        }
                    })
                } else {
                    AsyncStorage.removeItem("token")
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    verifiedRol: (token) => {
        return async (dispatch, getState) => {
            try {

                const res = await axios.get(`https://macchiatoapp.herokuapp.com/api/auth/signInRol`, {
                    headers: {
                        Authorization: "Bearer " + token   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                    }
                })

                dispatch({ type: "verified", payLoad: res.data })

            } catch (err) {
                console.log(err)
            }
        }
    },
    getInfoUser: () => {
        const token = AsyncStorage.getItem("token")
        return async (dispatch, getState) => {
            const res = await axios.get(`https://macchiatoapp.herokuapp.com/api/user/info`, {
                headers: {
                    Authorization: "Bearer " + token   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                }
            })
            return res.data.response
        }
    },
    modifiedUserData: (objData) => {
        const token = AsyncStorage.getItem("token")
        // console.log(token);
        return async (dispatch, getState) => {
            const res = await axios.post(`https://macchiatoapp.herokuapp.com/api/user/info`, { objData }, {
                headers: {
                    Authorization: "Bearer " + token   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                }
            })
            if (res.data.success) {
                dispatch({ type: "user", payLoad: res.data })
                dispatch({
                    type: "message", payLoad: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                dispatch({ type: "verified", payLoad: res.data.response.validate })
            } else {
                dispatch({
                    type: "message",
                    payLoad: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        }
    }

}




export default usersActions