import Home from './pages/Home';
import Notes from './layouts/Notes.vue'
import Archived from './layouts/Archived.vue'
import Login from './pages/Login';

export const routes = [
    {
        path: '', component: Home, redirect: '/login', children: [
            { path: '/notes', component: Notes, name: 'Notes' },
            { path: '/archived', component: Archived, name: 'Archived' },
        ]
    },
    { path: '/login', component: Login },
    { path: '*', redirect: '/' }
];