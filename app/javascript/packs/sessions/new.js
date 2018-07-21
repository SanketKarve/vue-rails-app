import Vue from 'vue/dist/vue.js';
import SessionNewView from 'views/sessions/new';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
new Vue({
    el: '#sessions-new-view',
    components: {
        'sessions-new-view': SessionNewView
    }
});
