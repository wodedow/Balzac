import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


const Index = () => import("@/views/index/Index.vue");
const Works = () => import("@/views/works/Works.vue");

const routes = [{
    path: "",
    redirect: "/index"
  }, {
    path: "/index",
    component: Index
  },
  {
    path: "/works",
    component: Works
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router