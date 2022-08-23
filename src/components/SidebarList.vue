<template>
    <div>
        <v-list shaped>
            <v-list-item-group v-model="selectedItem" color="primary">
                <v-list>
                    <v-list-item link>
                        <v-list-item-avatar>
                            <!-- <v-img :src="userData"></v-img> -->
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                {{ userData.username }}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{ userData.role }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-icon>mdi-menu-down</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
                <router-link tag="span" to="/notes">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-note-edit-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>Notes</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link tag="span" to="/archived">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-archive-arrow-down-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>Archive</v-list-item-title>
                    </v-list-item>
                </router-link>
                <v-list-item link v-for="(category, index) in categories" :key="index">
                    <v-list-item-icon>
                        <v-icon>mdi-paperclip</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>{{ category.name }}</v-list-item-title>
                </v-list-item>
                <router-link tag="span" to="/trash">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-delete-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>Trash</v-list-item-title>
                    </v-list-item>
                </router-link>
                <v-list-item link @click="logout">
                    <v-list-item-icon>
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Exit</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            user: null
        }
    },
    methods: {
        ...mapActions(["getUserData"]),
        logout() {
            this.$store.dispatch('logoutRequest')
            this.$router.push({ name: "Login" })
        }
    },
    computed: {
        ...mapGetters(["userData"]),
        categories() {
            return this.$store.state.categories;
        },
    },
    mounted() {
        this.$store.dispatch('getCategories');
    },
    created() {
        this.getUserData().catch(() => { });
    },
}
</script>