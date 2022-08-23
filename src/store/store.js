import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const baseUrl = "http://localhost:3000";
import userService from "./../services/user";
Vue.use(Vuex);

const initialUser = () => {
    let token = localStorage.getItem("accessToken");
    if (token)
        return { loggedIn: true, username: "", role: "", accessToken: token };
    else return { loggedIn: false, username: "", role: "", accessToken: null };
};

export const store = new Vuex.Store({
    state: {
        user: initialUser(),

        notes: [],
        note: {},

        categories: [],
        category_dialog: {},

        selections: [],

        new_note_dialog: false,
        edit_note_dialog: false,
        category_dialog: false,
        navigation: false,
    },
    getters: {
        isLoggedIn: (state) => state.user.loggedIn,
        userData: (state) => state.user,
    },
    mutations: {
        setNotes(state, data) { state.notes = data },
        addNote(state, data) { state.notes.push(data) },
        deleteNote(state, note) { state.notes.map((item, index) => { if (item.id == note.id) { state.notes.splice(index, 1) } }) },
        deleteNoteCategori(state, note) { state.notes.map((item, index) => { if (item.id == note.id) item = note }) },
        updateNote(state, note) { state.notes.map((item, index) => { if (item.id == note.id) item = note }) },
        setCategories(state, data) { state.categories = data },
        addCategory(state, data) { state.categories.push(data) },
        deleteCategory(state, category) { state.categories.map((item, index) => { if (item.id == category.id) { state.categories.splice(index, 1) } }) },

        loginSuccess(state, token) {
            state.user.loggedIn = true;
            state.user.accessToken = token;
            localStorage.setItem("accessToken", token);
        },
        logout(state) {
            (state.user.loggedIn = false), localStorage.removeItem("accessToken");
        },
        setUserData(state, userInfo) {
            (state.user.role = userInfo.group),
                (state.user.username = userInfo.username);
        },
    },
    actions: {
        async getNotes({ commit }) {
            axios.get(baseUrl + '/notes')
                .then(response => { commit("setNotes", response.data) })
                .catch(error => { console.log(error) })
        },
        async addNote({ commit }, data) {
            axios.post(baseUrl + '/notes', data)
                .then(response => { commit("addNote", response.data) })
                .catch(error => { console.log(error) })
        },
        async deleteNote({ commit }, note) {
            axios.delete(baseUrl + `/notes/${note.id}`)
                .then(response => { commit("deleteNote", note) })
                .catch(error => { console.log(error) })
        },
        async deleteNoteCategori({ commit }, { note, index }) {
            note.categories.splice(index, 1);
            axios.put(baseUrl + `/notes/${note.id}`, note)
                .then(response => { commit("deleteNoteCategori", response.data) })
                .catch(error => { console.log(error) })
        },
        async updateNote({ commit }, note) {
            axios.put(baseUrl + `/notes/${note.id}`, note)
                .then(response => { commit("updateNote", response.data) })
                .catch(error => { console.log(error) })
        },
        async getCategories({ commit }) {
            axios.get(baseUrl + '/categories')
                .then(response => { commit("setCategories", response.data) })
                .catch(error => { console.log(error) })
        },
        async addCategory({ commit }, data) {
            axios.post(baseUrl + '/categories', data)
                .then(response => { commit("addCategory", response.data) })
                .catch(error => { console.log(error) })
        },
        async deleteCategory({ commit }, category) {
            axios.delete(baseUrl + `/categories/${category.id}`)
                .then(() => {
                    commit("deleteCategory", category)
                }).catch(error => { console.log(error) })
        },
        async deleteNotes({ commit }, selections) {
            selections.map(async (selection) => await axios.delete(baseUrl + `/notes/${selection.id}`).then
                (() => {
                    commit("deleteNote", selection)
                }).catch(error => { console.log('error:', error) }))
            this.state.navigation = false;
        },
        async archiveNotes({ commit }, selections) {
            selections.map(async (selection) => {
                await axios.put(baseUrl + `/notes/${selection.id}`, { ...selection, archived: true }).then(response => {
                    console.log("rwspons", response.data);
                    let data = { ...selection, ...response.data };
                    selection.archived = true;
                    console.log("data", data);
                    commit("updateNote", selection)
                    console.log("selection:", selection);
                }).catch(error => {
                    console.log('error:', error);
                })
            })
            this.state.navigation = false;
        },

        //TODO------------------------------------------------------
        async loginRequest(context, credentials) {
            return userService
                .login(credentials)
                .then((response) => {
                    context.commit("loginSuccess", response.data.access);
                    return Promise.resolve(response.data);
                })
                .catch((error) => {
                    return Promise.reject(error);
                });
        },
        async registerRequest(context, payload) {
            return userService
                .register(payload)
                .then((response) => {
                    return Promise.resolve(response.data);
                })
                .catch((error) => {
                    return Promise.reject(error);
                });
        },
        async getUserData(context) {
            return userService
                .userDetail()
                .then((response) => {
                    context.commit("setUserData", response.data);
                    return Promise.resolve(response.data);
                })
                .catch((error) => {
                    return Promise.reject(error);
                });
        },
        async logoutRequest(context) {
            return new Promise((resolve) => {
                context.commit("logout");
                resolve();
            });
        },
    }
})