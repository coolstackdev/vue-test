import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const base = "/";

export default new Router({
    mode: "history",
    base,

    routes: [
        {
            path: "/",
            name: "home",
            component: require("@/pages/Home.vue").default
        },
        {
            path: "/detail/:id",
            name: "detail",
            component: () => import("@/pages/Brand.vue")
        },
        {
            path: "*",
            name: "404*",
            component: require("@/pages/404.vue").default
        }
    ]
});