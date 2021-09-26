import Layout from "@/layout/index.vue";

const homeRouter = {
    path: "/",
    name: "home",
    component: import("@/views/home/index.vue"),
    meta: {
        icon: "el-icon-s-home",
        showLink: true,
        savedPosition: false,
        rank: 0
    },
};

export default homeRouter;