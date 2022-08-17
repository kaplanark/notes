import axios from "axios";
const state = {
    notes: [],
    note: {},
}
const getters = {}
const mutations = {
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
}
const actions = {
    async getNotes({ commit }) {
        axios.get('http://localhost:3000/notes')
            .then(response => {
                commit('setNotes', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    async addNote({ commit }, data) {
        axios.post('http://localhost:3000/notes', data)
            .then(response => {
                commit('addNote', data)
            }).catch(error => {
                console.log(error)
            })
    },
    async deleteNote({ commit }, note) {
        axios.delete(`http://localhost:3000/notes/${note.id}`)
            .then(response => {
                commit('deleteNote', note)
            })
            .catch(error => {
                console.log(error)
            })
    },
    async deleteNoteCategori({ commit }, { note, index }) {
        note.categories.splice(index, 1);
        axios.put(`http://localhost:3000/notes/${note.id}`, note)
            .then(response => {
                commit('deleteNoteCategori', note)
            })
            .catch(error => {
                console.log(error)
            })
    },
    async updateNote({ commit }, note) {
        axios.put(`http://localhost:3000/notes/${note.id}`, note)
            .then(response => {
                commit('updateNote', note)
            })
            .catch(error => {
                console.log(error)
            })
    }
}
export default { state,getters, mutations, actions }