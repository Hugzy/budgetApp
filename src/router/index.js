import Vue from 'vue';
import Router from 'vue-router';
import BudgetItem from '@/components/BudgetItem';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BudgetItem',
      component: BudgetItem
    }
  ]
});
