<template>
    <div class="notes-wrapper">
        <div class="note-col" v-for="(note, index) in $store.state.notes" :key="index">
            <v-hover v-slot="{ hover }">
                <v-card :color="note.color" :elevation="hover ? 4 : 1" :class="{ 'on-hover': hover }" v-show="note.show"
                    class="note-card">
                    <div class="show-content" @click="showNote(note)">
                        <v-img height="auto" :src="note.img"></v-img>
                        <v-card-title v-if="note.title.length > 0">
                            {{ note.title }}
                        </v-card-title>
                        <v-card-text v-if="note.text.length > 0">
                            {{ note.text }}
                        </v-card-text>
                        <v-card-text v-if="note.categories.length > 0">
                            <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                                <v-chip class="ma-2" close @click:close="deteleCategori(note, index)" small
                                    v-for="(categori, index) in note.categories" :key="index">
                                    {{ categori }}
                                </v-chip>
                            </v-chip-group>
                        </v-card-text>
                    </div>
                    <v-card-actions class="d-block">
                        <v-expand-transition>
                            <div width="100%" v-show="hover" class="text-center">
                                <v-btn class="mx-2" fab dark x-small color="secondary" icon @click="showColor(note)">
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
    data: () => ({
        selection: 1,
        chip1: true,
        chip2: true,
    }),
    methods: {
        showNote(note) {
            this.$store.state.edit_note_dialog = true;
            this.$store.state.showNote = note;
            note.show = false;
        },
        showColor(note) {
            this.$store.state.edit_color_dialog = true;
            this.$store.state.showColor = note;
        },
        deteleCategori(note, index) {
            note.categories.splice(index, 1)
            this.$axios.put(`/notes/${note.id}`, note)
                .then(response => {

                })
                .catch(error => {
                    console.log(error)
                })
        },
        async deleteNote(note) {
            this.$axios.delete(`/notes/${note.id}`)
                .then(response => {
                    this.$store.state.notes = this.$store.state.notes.filter(t => t.id !== note.id)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    async mounted() {
        this.$axios.get("/notes")
            .then(response => {
                this.$store.state.notes = response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
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

.show-content{
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