<template>
    <div>
        <v-list shaped>
            <v-list-item-group v-model="selectedItem" color="primary">
                <router-link tag="span" to="/notes">
                    <v-list-item link class="active">
                        <v-list-item-icon>
                            <v-icon>mdi-note-edit-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>Notes</v-list-item-title>
                    </v-list-item>
                </router-link>
                <v-list-item link v-for="(category, index) in categories" :key="index">
                    <v-list-item-icon>
                        <v-icon>mdi-paperclip</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>{{category.name}}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>
<script>
export default {
    computed: {
        categories() {
            return this.$store.state.categories;
        },
    },
    mounted() {
        this.$store.dispatch('getCategories');
    },
}
</script>