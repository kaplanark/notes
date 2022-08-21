<template>
    <div>
        <v-list shaped>
            <v-list-item-group v-model="selectedItem" color="primary">
                <!-- <v-list>
                    <v-list-item link>
                        <v-list-item-avatar>
                            <v-img :src="user.avatar_url"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                {{user.login}}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-icon>mdi-menu-down</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list> -->
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
            </v-list-item-group>
        </v-list>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            user: null
        }
    },
    computed: {
        categories() {
            return this.$store.state.categories;
        },
    },
    mounted() {
        this.$store.dispatch('getCategories');
    },
    // created() {
    //     axios.get('http://localhost:5000/users')
    //         .then(response => {
    //             this.user = response.data;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
}
</script>