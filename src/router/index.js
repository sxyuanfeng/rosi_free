import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../components/list';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: List,
    },
];

export default new VueRouter({
    routes
});