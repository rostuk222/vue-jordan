import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import DashboardHome from './components/DashboardHome.vue'
import LoginForm from './components/LoginForm.vue'
import ForgotPass from './components/ForgotPass.vue'
import ResetPass from './components/ResetPass.vue'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            alias: '/login',
            name: 'root',
            component: Login,
            children: [
                {
                    path: '',
                    name: 'LoginForm',
                    component: LoginForm
                },
                {
                    path: 'forgotpass',
                    name: 'forgotpass',
                    component: ForgotPass
                },
                {
                    path: 'resetpass',
                    name: 'resetpass',
                    component: ResetPass
                }
            ]
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            children: [
                {
                    path: '',
                    name: 'DashboardHome',
                    component: DashboardHome
                }
            ]
        },
    ]
})

export default router;
