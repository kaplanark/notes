<template>
    <v-row justify="center">
        <v-dialog v-model="$store.state.edit_note_dialog" max-width="600px" @click:outside="updateNote">
            <v-card :color="$store.state.showNote.color">
                <v-card-text>
                    <div class="note-wrapper">
                        <v-autocomplete v-model="$store.state.showNote.categories" :items="categories" chips small-chips
                            label="Categoires" multiple outlined clearable></v-autocomplete>
                        <v-text-field v-model="$store.state.showNote.img" label="İmage Link" outlined></v-text-field>
                        <v-text-field v-model="$store.state.showNote.title" label="Title" outlined></v-text-field>
                        <v-textarea v-model="$store.state.showNote.text" label="Note" value="" rows="1" auto-grow
                            outlined>
                        </v-textarea>
                        <div class="color-palette">
                            <input type="radio" v-model="$store.state.showNote.color" name="color" value="#f28b82"
                                id="f28b82">
                            <input type="radio" v-model="$store.state.showNote.color" name="color" value="#ccff90"
                                id="ccff90">
                            <input type="radio" v-model="$store.state.showNote.color" name="color" value="#fbbc04"
                                id="fbbc04">
                            <input type="radio" v-model="$store.state.showNote.color" name="color" value="#e8eaed"
                                id="e8eaed">
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    data: () => ({
        categories: ['all', 'favorite', 'important'],
    }),
    methods: {
        async updateNote() {
            let id = this.$store.state.showNote.id;
            let data = this.$store.state.showNote
            data.show = true
            this.$axios.put(`/notes/${id}`, data)
                .then(response => {
                    this.$store.state.edit_note_dialog = false;
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
<style>
.note-wrapper {
    padding-top: 22px;
    display: flex;
    flex-direction: column;
}
</style>