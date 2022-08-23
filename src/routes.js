import Home from './pages/Home';
import Notes from './layouts/Notes.vue'
import Archived from './layouts/Archived.vue'
import Login from './pages/Login';
import Trash from './layouts/Trash.vue'

export const routes = [
    {
        path: '', component: Home, meta: { requiresAuth: true }, children: [
            { path: '/notes', component: Notes, name: 'Notes', meta: { requiresAuth: true } },
            { path: '/archived', component: Archived, name: 'Archived', meta: { requiresAuth: true } },
            { path: '/trash', component: Trash, name: 'Trash', meta: { requiresAuth: true } }
        ]
    },
    { path: '/login', component: Login, name:"Login"},
    { path: '*', redirect: '/login' }
];