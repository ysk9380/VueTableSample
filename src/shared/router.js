// router.js
import Vue from "vue";
import Router from "vue-router";
import Customer from "../components/Customer.vue";
import CustomerForm from "../components/CustomerForm.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/customer",
      component: Customer,
    },
    {
      path: "/customerform",
      component: CustomerForm,
    },
  ],
});
