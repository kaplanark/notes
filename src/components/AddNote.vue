<template>
    <v-row justify="center">
        <v-dialog v-model="$store.state.new_note_dialog" max-width="600px" @click:outside="addNote">
            <v-card :color="data.color">
                <v-card-text>
                    <div class="note-wrapper">
                        <v-autocomplete v-model="data.categories" :items="categories" chips small-chips
                            label="Categoires" multiple outlined clearable></v-autocomplete>
                        <v-text-field v-model="data.img" label="Image Url" outlined value=""></v-text-field>
                        <v-text-field v-model="data.title" label="Title" value="" outlined></v-text-field>
                        <v-textarea v-model="data.text" label="Note" value="" auto-grow rows="1" outlined>
                        </v-textarea>
                        <div class="color-palette">
                            <input type="radio" v-model="data.color" name="color" value="#f28b82" id="f28b82">
                            <input type="radio" v-model="data.color" name="color" value="#ccff90" id="ccff90">
                            <input type="radio" v-model="data.color" name="color" value="#fbbc04" id="fbbc04">
                            <input type="radio" v-model="data.color" name="color" value="#e8eaed" id="e8eaed">
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
        data: { id: Math.random().toFixed(5), img: '', title: '', text: '', color: '', categories: [], show: true, pinned: false, archived: false, }
    }),
    computed: {
        categories() {
            let data = [];
            this.$store.state.categories.forEach(category => {
                data.push(category.value);
            });
            return data;
        },
    },
    methods: {
        addNote() {
            if (this.data.text.length > 0 || this.data.img.length > 0 || this.data.title.length > 0) {
                this.$store.dispatch('addNote', this.data);
            }
            this.data = { id: Math.random().toFixed(5), img: '', title: '', text: '', color: '', categories: [], show: true, pinned: false, archived: false, };
        },
    },
}
</script>
<style>
.color-palette {
    padding: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 22px;
}

.color-palette input {
    height: 24px;
    width: 24px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.color-palette input::before {
    position: absolute;
    content: "";
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border: 2px solid rgb(200, 200, 200);
}

.color-palette input:checked::before {
    border-color: rgb(166, 42, 166);
}

#f28b82::before {
    background-color: #f28b82;
}

#ccff90::before {
    background-color: #ccff90;
}

#fbbc04::before {
    background-color: #fbbc04;
}

#e8eaed::before {
    background-color: #e8eaed;
}
</style>