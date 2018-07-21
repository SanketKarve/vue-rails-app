import Vue from 'vue/dist/vue.js';
import LayoutNavbarView from 'views/layouts/navbar';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
new Vue({
    el: '#layouts-navbar-view',
    components: {
        'layouts-navbar-view': LayoutNavbarView
    }
});
