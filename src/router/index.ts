import { createRouter, createWebHashHistory } from "vue-router";

// 定义路由类型
interface RouteConfig {
  path: string;
  name: string;
  component: () => Promise<any>;
}

// 定义路由配置
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/detail', // 详情页
    name: 'detail',
    component: () => import('../views/detail/index.vue')
  },
  {
    path:'/test',
    name:'test',
    component: () => import('../views/test/index.vue')
  }
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果存在 savedPosition，则滚动到之前保存的位置
    if (savedPosition) {
      return savedPosition;
    }

    // 如果目标路由有 hash，则滚动到对应的锚点
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    // 否则，平滑滚动到页面顶部
    return { top: 0, behavior: 'smooth' };
  }
});

// 导出路由
export default router;