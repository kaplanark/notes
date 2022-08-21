<template>
    <div class="navigation">
        <v-bottom-navigation v-model="value" :input-value="$store.state.navigation" color="indigo">
            <v-btn @click="deleteNotes">
                <span>Delete</span>

                <v-icon>mdi-delete</v-icon>
            </v-btn>

            <v-btn @click="archiveNotes">
                <span>Arhived</span>

                <v-icon>mdi-archive</v-icon>
            </v-btn>

            <v-btn>
                <span>Pinned</span>

                <v-icon>mdi-pin</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 4,
        }
    },
    methods: {
        deleteNotes() {
            let selections = this.$store.state.selections
            this.$store.dispatch('deleteNotes', selections);
        },
        archiveNotes() {
            let selections = this.$store.state.selections
            this.$store.dispatch('archiveNotes', selections);
        }
    },
}
</script>
<style>
.navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
}
</style>