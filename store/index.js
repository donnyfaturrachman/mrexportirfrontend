import Vuex from 'vuex'
import Cookies from "js-cookie"
const createStore = () => {
    return new Vuex.Store({
        state: {
            token: null,
            loadedAddress: [],
            email: null,
            iduser: null,
            name: null
        },
        mutations: {
            setToken(state, token) {
                state.token = token
            },
            setEmail(state, email) {
                state.email = email
            },
            setId(state, id) {
                state.id = id
            },
            setName(state, name) {
                state.name = name
            },
            setLoadedAdress(state, address) {
                state.loadedAddress = address
            },
            clearToken(state) {
                state.token = null;
            },
            clearUser(state) {
                state.email = null
                state.iduser = null
                state.name = null
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
                        vuexContext.commit("setEmail", response.data.email)
                        vuexContext.commit("setId", response.data.id)
                        vuexContext.commit("setName", response.data.name)
                        localStorage.setItem("id", response.data.id)
                        Cookies.set("id", response.data.id)
                        localStorage.setItem("name", response.data.name)
                        Cookies.set("name", response.data.name)
                        localStorage.setItem("email", response.data.email)
                        Cookies.set("email", response.data.email)
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
                        vuexContext.commit("setEmail", response.data.email)
                        vuexContext.commit("setId", response.data.id)
                        vuexContext.commit("setName", response.data.name)
                        localStorage.setItem("id", response.data.id)
                        Cookies.set("id", response.data.id)
                        localStorage.setItem("name", response.data.name)
                        Cookies.set("name", response.data.name)
                        localStorage.setItem("email", response.data.email)
                        Cookies.set("email", response.data.email)
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
                        vuexContext.commit("setEmail", response.data.email)
                        vuexContext.commit("setId", response.data.id)
                        vuexContext.commit("setName", response.data.name)
                        localStorage.setItem("id", response.data.id)
                        Cookies.set("id", response.data.id)
                        localStorage.setItem("name", response.data.name)
                        Cookies.set("name", response.data.name)
                        localStorage.setItem("email", response.data.email)
                        Cookies.set("email", response.data.email)
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
                let email;
                let id;
                let name;
                let expirationDate;

                if (req) {

                    if (!req.headers.cookie) {

                        return;
                    }

                    const jwtCookie = req.headers.cookie
                        .split(";")
                        .find(c => c.trim().startsWith("jwt=")).replace("jwt=", " ");
                    const jwtid = req.headers.cookie
                        .split(";")
                        .find(c => c.trim().startsWith("id=")).replace("id=", " ");
                    const jwtemail = req.headers.cookie
                        .split(";")
                        .find(c => c.trim().startsWith("email=")).replace("email=", " ");
                    const jwtname = req.headers.cookie
                        .split(";")
                        .find(c => c.trim().startsWith("name=")).replace("name=", " ");

                    if (!jwtCookie) {
                        return;
                    }

                    if (!jwtid) {
                        return;
                    }
                    if (!jwtemail) {
                        return;
                    }
                    if (!jwtname) {
                        return;
                    }
                    token = jwtCookie
                    id = jwtid
                    email = jwtemail
                    name = jwtname
                } else {

                    token = localStorage.getItem("token");
                    email = localStorage.getItem("email");
                    name = localStorage.getItem("name");
                    id = localStorage.getItem("id");
                    expirationDate = localStorage.getItem("tokenExpiration");
                }

                vuexContext.commit("setToken", token)
                vuexContext.commit("setEmail", email)
                vuexContext.commit("setId", id)
                vuexContext.commit("setName", name)
            }
        },
        getters: {
            loadedEmail(state) {
                return state.email
            },
            loadedName(state) {
                return state.name
            },
            loadedId(state) {
                return state.id
            },
            isAuthenticated(state) {

                return state.token != null
            }
        }
    })
}
export default createStore