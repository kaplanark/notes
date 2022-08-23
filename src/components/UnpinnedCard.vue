<template>
    <div class="notes-wrapper">
        <div class="note-col" v-for="(note, index) in unpinned" :key="index">
            <input type="checkbox" :value="note" class="select-box" v-model="checked"/>
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
                                <v-btn class="mx-2" fab dark x-small color="secondary" icon @click="updatePinned(note)">
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
                                        mdi-archive-arrow-down-outline
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
    props: ['unpinned'],
    data() {
        return {
            checked:[],
        }
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
        updatePinned(note) {
            if (note.pinned) {
                note.pinned = false;
                this.$store.dispatch('updateNote', note);
            } else {
                note.pinned = true;
                this.$store.dispatch('updateNote', note);
            }
        },
        updateArchive(note) {
            if (note.archived) {
                note.archived = false;
                this.$store.dispatch('updateNote', note);
            } else {
                note.archived = true;
                note.pinned = false;
                this.$store.dispatch('updateNote', note);
            }
        }
    },
    watch: {
        checked(newValue) {
            if (newValue.length > 0) {
                this.$store.state.navigation = true;
            } else {
                this.$store.state.navigation = false;
            }
            this.$store.state.selections = newValue;
        }
    }
}
</script>

<style lang="scss">
.note-col {
    position: relative;
    .select-box {
        z-index: 2;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 14px;
        width: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity .2s ease-in-out;
        background-color: #fff;
        border-color: #fff;

        &::before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: #fff;
        }
        &::after{
            position: absolute;
            content: "";
            height: 24px;
            width: 24px;
            border-radius: 50%;
            cursor: pointer;
            background-image: url(./../assets/check.svg);
        }
        &:checked {
            opacity: 1;
            &+.note-card {
               opacity: 0.5;
            }
        }
    }

    &:hover {
        .select-box {
            opacity: 1;
        }
    }
}
</style>