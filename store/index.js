import Vuex from 'vuex'
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
            async loginUser(vuexContext, authData) {
                try {
                    await this.$axios.$post(process.env.baseUrl + 'authlogin', authData).then((response) => {
                        vuexContext.commit("setToken", response.token)
                        localStorage.setItem("token", response.token)
                        Cookies.set("jwt", response.token);
                    });
                    this.$toast.show('Success .....')
                } catch (e) {
                    this.$toast.show('User Not Found')
                }
            },
            async RegisterUser(vuexContext, authData) {
                try {
                    await this.$axios.$post(process.env.baseUrl + 'authregister', authData).then((response) => {

                        vuexContext.commit("setToken", response.token)
                        localStorage.setItem("token", response.token)
                        Cookies.set("jwt", response.token);
                    })
                    this.$toast.show('Success .....')
                    this.$router.push('/dashboard')
                } catch (e) {
                    var err = []
                    if (e.response) {
                        if (e.response.data) {
                            var obj = JSON.parse(JSON.stringify(e.response.data))
                            Object.keys(obj).forEach(function(key) {

                                err.push(obj[key][0])
                            });
                        }
                    }
                    for (var i = 0; i < err.length; i++) {
                        this.$toast.show(err[i])
                    }
                    this.$toast.show('Failed Register')
                }
            },
            async RegisterCompany(vuexContext, authData) {
                try {
                    await this.$axios.$post(process.env.baseUrl + 'authregistercompany', authData).then((response) => {
                        vuexContext.commit("setToken", response.token)
                        localStorage.setItem("token", response.token)
                        Cookies.set("jwt", response.token);
                    })
                    this.$toast.show('Success .....')
                    this.$router.push('/dashboard')
                } catch (e) {
                    var err = []
                    if (e.response) {
                        if (e.response.data) {
                            var obj = JSON.parse(JSON.stringify(e.response.data))
                            Object.keys(obj).forEach(function(key) {
                                err.push(obj[key][0])
                            });
                        }
                    }
                    for (var i = 0; i < err.length; i++) {
                        this.$toast.show(err[i])
                    }
                    this.$toast.show('Failed Register')
                }
            },
            logout(vuexContext) {
                vuexContext.commit("clearToken");
                Cookie.remove("jwt");
                if (process.client) {
                    localStorage.removeItem("token");
                }
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
            }
        },
        getters: {
            isAuthenticated(state) {

                return state.token != null
            }
        }
    })
}
export default createStore