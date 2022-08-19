import Notes from './layouts/Notes.vue'
import Archived from './layouts/Archived.vue'

export const routes = [
    { path: '', redirect: '/notes' },
    { path: '/notes', component: Notes, name: 'Notes' },
    { path: '/archived', component: Archived, name: 'Archived' },
    { path: '*', redirect: '/' }
];