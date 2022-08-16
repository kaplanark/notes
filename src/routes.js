import Homepage from './pages/Homepage.vue'
import Notes from './layouts/Notes.vue'
import Calendar from './layouts/Calendar.vue'
import Blogs from './layouts/Blogs.vue'

export const routes = [
    { path: '', name: 'Homepage', component: Homepage, redirect:'/notes'},
    { path: '/notes', component: Notes, name: 'Notes'},
    { path: '/calendar', component: Calendar, name: 'Calendar'},
    { path: '/blogs', component: Blogs, name: 'Blogs'},
    { path: '*', redirect: '/' }
];