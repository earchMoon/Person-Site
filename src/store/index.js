/**
 * Created by wen on 2017/3/15.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: '文皓均'
    },
    getters:{
        getName: state => {
            return state.name;
        }
    },
    modules: {
        ...modules
    }
});

