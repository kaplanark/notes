<template>
    <v-row justify="center">
        <v-dialog v-model="$store.state.edit_note_dialog" max-width="600px" @click:outside="updateNote">
            <v-card :color="note.color">
                <v-card-text>
                    <div class="note-wrapper">
                        <v-autocomplete v-model="note.categories" :items="categories" chips small-chips
                            label="Categoires" multiple outlined clearable></v-autocomplete>
                        <v-text-field v-model="note.img" label="İmage Link" outlined></v-text-field>
                        <v-text-field v-model="note.title" label="Title" outlined></v-text-field>
                        <v-textarea v-model="note.text" label="Note" value="" rows="1" auto-grow outlined>
                        </v-textarea>
                        <div class="color-palette">
                            <input type="radio" v-model="note.color" name="color" value="#f28b82" id="f28b82">
                            <input type="radio" v-model="note.color" name="color" value="#ccff90" id="ccff90">
                            <input type="radio" v-model="note.color" name="color" value="#fbbc04" id="fbbc04">
                            <input type="radio" v-model="note.color" name="color" value="#e8eaed" id="e8eaed">
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    computed: {
        note() {
            return this.$store.state.note;
        },
        categories() {
            let data = [];
            this.$store.state.categories.forEach(category => {
                data.push(category.value);
            });
            return data;
        },
    },
    methods: {
        updateNote() {
            this.$store.dispatch('updateNote', this.$store.state.note);
        },
    },
}
</script>
<style>
.note-wrapper {
    padding-top: 22px;
    display: flex;
    flex-direction: column;
}
</style>