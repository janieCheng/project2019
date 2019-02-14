import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../pages/index' // 注意路径
import detailPage from '../pages/detail'
import detailCouPage from '../pages/detail/count'
import detailAnaPage from '../pages/detail/analysis'
import detailForPage from '../pages/detail/forecast'
import detailPubPage from '../pages/detail/publish'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    },
    {
      path: '/detail',
      component: detailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'count',
          component: detailCouPage
        },
        {
          path: 'analysis',
          component: detailAnaPage
        },
        {
          path: 'forecast',
          component: detailForPage
        },
        {
          path: 'publish',
          component: detailPubPage
        }
      ]
    }
  ]
})
