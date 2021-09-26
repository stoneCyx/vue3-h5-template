import { createRouter, createWebHashHistory, RouteRecordRaw,RouteComponent } from 'vue-router';
//静态路由
import homeRouter from './modules/home';
import remainingRouter from './modules/remaining';


const constantRoutes: Array<RouteComponent> = [
  homeRouter,
  remainingRouter
];

//按照路由meta的rank进行排序路由
const ascending = (arr: any[]) =>{
  return arr.sort((a,b)=>{
    return a?.meta?.rank - b?.meta.rank;
  });
}

const router = createRouter({
  history: createWebHashHistory(),
  routes:ascending(constantRoutes)
});

router.beforeEach((to,from,next)=>{
  console.log(to,from,next);
  next();
})

export default router;
