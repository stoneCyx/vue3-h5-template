
const remainingRouter = {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
        title: "message.hslogin",
        showLink: false,
        rank: 101
    }
}

export default remainingRouter;
