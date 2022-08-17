<template>
    <div class="notes-wrapper">
        <div class="note-col" v-for="(note, index) in notes" :key="index">
            <v-hover v-slot="{ hover }">
                <v-card :color="note.color" :elevation="hover ? 4 : 1" :class="{ 'on-hover': hover }" v-show="note.show"
                    class="note-card">
                    <div class="show-content" @click="editNote(note)">
                        <v-img height="auto" :src="note.img"></v-img>
                        <v-card-title v-if="note.title.length > 0">
                            {{ note.title }}
                        </v-card-title>
                        <v-card-text v-if="note.text.length > 0">
                            {{ note.text }}
                        </v-card-text>
                        <v-card-text v-if="note.categories.length > 0">
                            <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                                <v-chip class="ma-2" close @click:close="deleteNoteCategori(note, index)" small
                                    v-for="(categori, index) in note.categories" :key="index">
                                    {{ categori }}
                                </v-chip>
                            </v-chip-group>
                        </v-card-text>
                    </div>
                    <v-card-actions class="d-block">
                        <v-expand-transition>
                            <div width="100%" class="tool-buttons text-center">
                                <v-btn class="mx-2" fab dark x-small color="secondary" icon>
                                    <v-icon dark>
                                        mdi-palette
                                    </v-icon>
                                </v-btn>

                                <v-btn class="mx-2" fab dark x-small color="secondary" icon>
                                    <v-icon dark>
                                        mdi-heart
                                    </v-icon>
                                </v-btn>

                                <v-btn class="mx-2" fab dark x-small color="secondary" icon>
                                    <v-icon dark>
                                        mdi-file-image-plus
                                    </v-icon>
                                </v-btn>

                                <v-btn class="mx-2" fab dark x-small color="secondary" icon @click="deleteNote(note)">
                                    <v-icon dark>
                                        mdi-delete-empty-outline
                                    </v-icon>
                                </v-btn>
                            </div>
                        </v-expand-transition>

                    </v-card-actions>
                </v-card>
            </v-hover>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('getNotes');
    },
    computed: {
        notes() {
            return this.$store.state.notes;
        },
    },
    methods: {
        editNote(note) {
            this.$store.state.edit_note_dialog = true;
            this.$store.state.note = note
        },
        deleteNote(note) {
            this.$store.dispatch('deleteNote', note);
        },
        deleteNoteCategori(note, index) {
            this.$store.dispatch('deleteNoteCategori', { note, index });
        },
    },

}
</script>
<style>
.note-card {
    overflow: hidden;
}

.note-col {
    display: block;
    margin-bottom: 24px;
}
.tool-buttons{
    opacity: 0;
    transform: translateY(12px);
    transition: all 0.3s ease-in-out;
}
.note-card:hover .tool-buttons{
    opacity: 1;
    transform: translateY(0px);
}

.show-content {
    cursor: pointer;
}

.notes-wrapper {
    column-count: 4;
    -webkit-column-count: 4;
    -moz-column-count: 4;
    margin-bottom: 32px;
}

@media (max-width:1400px) {
    .notes-wrapper {
        column-count: 3;
        -webkit-column-count: 3;
        -moz-column-count: 3;
    }
}

@media (max-width:992px) {
    .notes-wrapper {
        column-count: 2;
        -webkit-column-count: 2;
        -moz-column-count: 2;
    }
}
</style>