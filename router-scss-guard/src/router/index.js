import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import NotFound from "@/views/NotFound.vue";
Vue.use(VueRouter);

let login = false;
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    alias: "/contact-us",
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),

    // route guard
    // beforeEnter: (to, from, next) => {
    //   if(localStorage.getItem("vueAuth"=="true")
    //   next();
    //   else
    //   next("/");
    // }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (to.path == "/profile" || to.path == "/contact") {
    if (localStorage.getItem("vueAuth") == "true")
      next();
    else
      next("/");
  }
  next();
});

export default router;
