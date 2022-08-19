<template>
    <v-app id="app">

        <v-navigation-drawer v-model="drawer" app>
            <sidebar-list></sidebar-list>
        </v-navigation-drawer>

        <v-app-bar color="white" app elevation="0">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span>{{ $route.name }}</span>
                <v-btn-toggle v-model="toggle_exclusive" mandatory v-if="$route.name=='Notes'">
                    <v-btn text color="dark" @click="newNote" small>
                        <span class="mr-2">New Note</span>
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn text color="dark" small @click="newCategory">
                        <span class="mr-2">Categories</span>
                        <v-icon>mdi-attachment-plus</v-icon>
                    </v-btn>
                </v-btn-toggle>
            </v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

    </v-app>
</template>

<script>
import SidebarList from "./components/SidebarList.vue";
export default {
    name:'App',
    data() {
        return {
            drawer: null,
        }
    },
    components: { SidebarList },
    methods: {
        newNote() {
            this.$store.state.new_note_dialog = true
        },
        newCategory() {
            this.$store.state.category_dialog = true
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }
}
</script>
<style>
.v-app-bar.v-toolbar.v-sheet {
    border-bottom: 1px solid #dadce0 !important;
}

.v-toolbar__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%
}

@media (min-width:1200px) {
    .v-app-bar.v-toolbar.v-sheet {
        left: 0 !important;
    }

    .v-navigation-drawer {
        top: 64px !important;
    }
}
</style>