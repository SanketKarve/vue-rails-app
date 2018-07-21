import Vue from 'vue/dist/vue.js';
import ArticlesIndexView from 'views/articles/index';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
new Vue({
    el: '#articles-index-view',
    components: {
        'articles-index-view': ArticlesIndexView
    }
});
