import Vuex from 'vuex'
import axios from 'axios'
import Cookies from "js-cookie"
const createStore = () => {

    return new Vuex.Store({
        state: {
            token: null
        },
        mutations: {
            setToken(state, token) {

                state.token = token;
            },
            clearToken(state) {
                state.token = null;
            }
        },
        actions: {
            loginUser(vuexContext, authData) {

                axios({
                        method: 'post',
                        url: process.env.baseUrl + 'authlogin',
                        data: authData,
                        headers: { 'Content-Type': 'multipart/form-data' }
                    })
                    .then(function(response) {
                        //handle success
                        vuexContext.commit("setToken", response.data.token)
                        localStorage.setItem("token", response.data.token)


                        Cookies.set("jwt", response.data.token);

                    })
                    .catch(function(err) {
                        //handle error



                    })
            },
            RegisterUser(vuexContext, authData) {
                axios({
                        method: 'post',
                        url: process.env.baseUrl + 'authregister',
                        data: authData,
                        headers: { 'Content-Type': 'multipart/form-data' }
                    })
                    .then(function(response) {
                        //handle success
                        vuexContext.commit("setToken", response.data.token)
                        localStorage.setItem("token", response.data.token)

                        Cookies.set("jwt", response.data.token);

                    })
                    .catch(function(err) {
                        //handle error



                    })
            },
            RegisterUser(vuexContext, authData) {
                axios({
                        method: 'post',
                        url: process.env.baseUrl + 'authregister',
                        data: authData,
                        headers: { 'Content-Type': 'multipart/form-data' }
                    })
                    .then(function(response) {
                        //handle success
                        vuexContext.commit("setToken", response.data.token)
                        localStorage.setItem("token", response.data.token)

                        Cookies.set("jwt", response.data.token);

                    })
                    .catch(function(err) {
                        //handle error



                    })
            },
            initAuth(vuexContext, req) {
                let token;
                let expirationDate;

                if (req) {

                    if (!req.headers.cookie) {

                        return;
                    }

                    const jwtCookie = req.headers.cookie
                        .replace("jwt=", " ");

                    if (!jwtCookie) {
                        return;
                    }


                    token = jwtCookie;

                } else {

                    token = localStorage.getItem("token");
                    expirationDate = localStorage.getItem("tokenExpiration");
                }

                vuexContext.commit("setToken", token);
            },
        },
        getters: {
            isAuthenticated(state) {

                return state.token != null
            }
        }
    })
}
export default createStore