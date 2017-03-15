import Vue from 'vue';
import App from './components/App/App.vue';
import router from './router';
import store from './store';

const vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});
