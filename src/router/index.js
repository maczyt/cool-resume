import Vue from 'vue'
import Router from 'vue-router'

const show = () => import('@/components/show')
const edit = () => import('@/components/edit')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'show',
    component: show
  }, {
    path: '/edit',
    name: 'edit',
    component: edit,
  }]
})
