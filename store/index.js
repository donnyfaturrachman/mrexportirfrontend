import Vuex from 'vuex'
import Cookies from "js-cookie"
const createStore = () => {
    return new Vuex.Store({
        state: {
            token: null,
            loadedAddress: []
        },
        mutations: {
            setToken(state, token) {
                state.token = token;
            },
            setLoadedAdress(state, address) {
                state.loadedAddress = address
            },
            clearToken(state) {
                state.token = null;
            }
        },
        actions: {
            async listAddress(vuexContext, Data) {
                try {
                    await this.$axios.$get(process.env.baseUrl + 'listaddress', Data).then((response) => {

                    });
                    this.$toast.show('Success .....')
                } catch (e) {
                    this.$toast.show('Failed To Send Email')
                }
            },
            async sendContact(vuexContext, Data) {
                try {
                    await this.$axios.$post(process.env.baseUrl + 'sendcontactus', Data).then((response) => {

                    });
                    this.$toast.show('Success .....')
                } catch (e) {
                    this.$toast.show('Failed To Send Email')
                }
            },
            async updateAddress(vuexContext, Data) {
                try {
                    console.log(Data)
                    await this.$axios.$post(process.env.baseUrl + 'updateaddress', Data).then((response) => {

                    });
                    this.$toast.show('Success .....')
                } catch (e) {
                    this.$toast.show('Failed To Add Address')
                }
            },
            async insertAddress(vuexContext, Data) {
                try {
                    await this.$axios.$post(process.env.baseUrl + 'insertaddress', Data).then((response) => {

                    });
                    this.$toast.show('Success .....')
                } catch (e) {
                    this.$toast.show('Failed To Add Address')
                }
            },
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
                Cookies.remove("jwt");
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
