<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
            <AsideList></AsideList>
        </v-navigation-drawer>

        <v-app-bar color="white" app elevation="0">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span>{{ $route.name }}</span>
                <v-btn v-if="$route.name == 'Notes'" class="ml-4" text color="dark" @click="newNote" small>
                    <span class="mr-2">New Note</span>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
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
import AsideList from "./../components/AsideList.vue";
export default {
    data() {
        return {
            drawer: null,
            title: null
        }
    },
    components: { AsideList },
    methods: {
        newNote() {
            this.$store.state.new_note_dialog = true
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
.theme--light.v-app-bar.v-toolbar.v-sheet {
    border-bottom: 1px solid #dadce0 !important;
}

.v-toolbar__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%
}

@media (min-width:1200px) {
    .theme--light.v-app-bar.v-toolbar.v-sheet {
        left: 0 !important;
    }

    .theme--light.v-navigation-drawer {
        top: 64px !important;
    }
}
</style>