import Vue from 'vue/dist/vue.js';
import UsersNewView from 'views/users/new';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
new Vue({
    el: '#users-new-view',
    components: {
        'users-new-view': UsersNewView
    }
});
