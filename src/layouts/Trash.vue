<template>
    <v-container fluid>
        <div class="notes-wrapper">
            <div class="note-col" v-for="(note, index) in trashed" :key="index">
                <v-hover v-slot="{ hover }">
                    <v-card :color="note.color" :elevation="hover ? 4 : 1" :class="{ 'on-hover': hover }"
                        v-show="note.show" class="note-card">
                        <div class="show-content" @click="editNote(note)">
                            <v-img height="auto" :src="note.img"></v-img>
                            <v-card-title v-if="note.title.length > 0">
                                {{ note.title }}
                            </v-card-title>
                            <v-card-text v-if="note.text.length > 0">
                                {{ note.text }}
                            </v-card-text>
                            <v-card-text v-if="note.categories.length > 0">
                                <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text"
                                    column>
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
                                    <v-btn class="mx-2" fab dark x-small color="secondary" icon
                                        @click="updatePinned(note)">
                                        <v-icon dark v-if="note.pinned">
                                            mdi-pin-off-outline
                                        </v-icon>
                                        <v-icon dark v-else>
                                            mdi-pin-outline
                                        </v-icon>
                                    </v-btn>
                                    <v-btn class="mx-2" fab dark x-small color="secondary" icon
                                        @click="updateArchive(note)">
                                        <v-icon dark>
                                            mdi-archive-arrow-up-outline
                                        </v-icon>
                                    </v-btn>

                                    <v-btn class="mx-2" fab dark x-small color="secondary" icon
                                        @click="deleteNote(note)">
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
            <UpdateNote></UpdateNote>
        </div>
    </v-container>
</template>
<script>
import { trashed } from '@/mixins/notes.js';
import UpdateNote from '@/components/UpdateNote.vue';
export default {
    mixins: [trashed],
    mounted() {
        this.$store.dispatch("getNotes");
    },
    methods: {
        editNote(note) {
            this.$store.state.edit_note_dialog = true;
            this.$store.state.note = note;
        },
        deleteNote(note) {
            this.$store.dispatch("deleteNote", note);
        },
        deleteNoteCategori(note, index) {
            this.$store.dispatch("deleteNoteCategori", { note, index });
        },
        updatePinned(note) {
            if (note.pinned) {
                note.pinned = false;
                this.$store.dispatch("updateNote", note);
            }
            else {
                note.pinned = true;
                this.$store.dispatch("updateNote", note);
            }
        },
        updateArchive(note) {
            if (note.archived) {
                note.archived = false;
                this.$store.dispatch("updateNote", note);
            }
            else {
                note.archived = true;
                this.$store.dispatch("updateNote", note);
            }
        }
    },
    components: { UpdateNote }
}
</script>