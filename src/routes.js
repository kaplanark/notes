import Notes from './layouts/Notes.vue'

export const routes = [
    { path: '',redirect:'/notes'},
    { path: '/notes', component: Notes, name: 'Notes'},
    { path: '*', redirect: '/' }
];