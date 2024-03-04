import Vue from "vue"
import Router from "vue-router"
// Import your component
import Home from "../src/App.vue"

Vue.use(Router)

export default new Router({
  mode: "history", // Use the history mode
  base: "/modules/counter-app/", // Set the base URL
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    // Define other routes here
  ],
})
