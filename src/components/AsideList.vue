<template>
    <div>
        <v-list shaped>
            <v-list-item-group v-model="selectedItem" color="primary">
                <router-link tag="span" to="/notes">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-note-edit-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>Notes</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link tag="span" to="/calendar">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-calendar</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>Calendar</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link tag="span" to="/blogs">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-post-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>Blogs</v-list-item-title>
                    </v-list-item>
                </router-link>
            </v-list-item-group>
        </v-list>
    </div>
</template>
<script>
export default {
    data: () => ({
        admins: [
            ['Management', 'mdi-account-multiple-outline'],
            ['Settings', 'mdi-cog-outline'],
        ],
        cruds: [
            ['Create', 'mdi-plus-outline'],
            ['Read', 'mdi-file-outline'],
            ['Update', 'mdi-update'],
            ['Delete', 'mdi-delete'],
        ],
    }),
}
</script>