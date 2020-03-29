import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Landing from "./views/Landing.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: Header,
        default: Landing,
        footer: Footer
      }
    }
  ]
});
