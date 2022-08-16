<template>
    <v-row justify="center">
        <v-dialog v-model="$store.state.edit_color_dialog" max-width="300px" @click:outside="updateColor">
            <v-card>
                <v-card-text>
                    <div class="color-palette">
                        <input type="radio" v-model="$store.state.showColor.color" name="color" value="#f28b82"
                            id="f28b82">
                        <input type="radio" v-model="$store.state.showColor.color" name="color" value="#ccff90"
                            id="ccff90">
                        <input type="radio" v-model="$store.state.showColor.color" name="color" value="#fbbc04"
                            id="fbbc04">
                        <input type="radio" v-model="$store.state.showColor.color" name="color" value="#e8eaed"
                            id="e8eaed">
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    methods: {
        async updateColor() {
            this.$axios.put(`/notes/${this.$store.state.showColor.id}`, this.$store.state.showColor)
                .then(response => {
                    this.$store.state.edit_color_dialog = false
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
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