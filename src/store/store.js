import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const baseUrl = "http://localhost:3000";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        notes: [],
        note: {},

        new_note_dialog: false,
        edit_note_dialog: false,
    },
    mutations: {
        setNotes(state, data) {
            state.notes = data;
        },
        addNote(state, data) {
            state.notes.push(data);
        },
        deleteNote(state, note) {
            state.notes.map((item, index) => {
                if (item.id == note.id) {
                    state.notes.splice(index, 1);
                }
            })
        },
        deleteNoteCategori(state, note) {
            state.notes.map((item, index) => {
                if (item.id == note.id) {
                    state.notes[index] = note;
                }
            })
        },
        updateNote(state, note) {
            state.notes.map((item, index) => {
                if (item.id == note.id) {
                    state.notes[index] = note;
                }
            })
        }
    },
    actions: {
        async getNotes({ commit }) {
            axios.get(baseUrl + '/notes')
                .then(response => {
                    commit('setNotes', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async addNote({ commit }, data) {
            axios.post(baseUrl + '/notes', data)
                .then(response => {
                    commit('addNote', data)
                }).catch(error => {
                    console.log(error)
                })
        },
        async deleteNote({ commit }, note) {
            axios.delete(baseUrl + `/notes/${note.id}`)
                .then(response => {
                    commit('deleteNote', note)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async deleteNoteCategori({ commit }, { note, index }) {
            note.categories.splice(index, 1);
            axios.put(baseUrl + `/notes/${note.id}`, note)
                .then(response => {
                    commit('deleteNoteCategori', note)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async updateNote({ commit }, note) {
            axios.put(baseUrl + `/notes/${note.id}`, note)
                .then(response => {
                    commit('updateNote', note)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})