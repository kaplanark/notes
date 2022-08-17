<template>
    <v-row justify="center">
        <v-dialog v-model="$store.state.category_dialog" max-width="600px" @click:outside="clearInput">
            <v-card>
                <v-card-text class="pt-4">
                    <v-text-field v-model="name" label="New Category" @keyup.enter="addCategory"></v-text-field>
                    <div class="text-center">
                        <v-chip class="ma-2" v-for="(category, index) in categories" :key="index"
                            color="light" close @click:close="deleteCategory(category)">
                            {{ category.value }}
                        </v-chip>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    data() {
        return {
            id: null,
            name: '',
            value: '',
        }
    },
    computed: {
        categories() {
            return this.$store.state.categories;
        },
    },
    methods: {
        addCategory() {
            let data = {
                id: this.id,
                name: this.name,
                value: this.name.toLowerCase(),
            }
            if (data.name.length > 0) {
                this.$store.dispatch('addCategory', data);
            }
            this.name = '';
        },
        deleteCategory(category) {
            this.$store.dispatch('deleteCategory', category);
        },
        clearInput() {
            this.name = '';
        }
    },
    created() {
        this.id = Math.random();
    },
}
</script>