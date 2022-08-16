import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        new_note_dialog: false,
        edit_note_dialog:false,
        edit_color_dialog:false,

        showNote: {},
        showColor: {},

        notes: [],
    },
    getters: {
        clearData(state) {
            state.showNote = {};
        },
    },
})