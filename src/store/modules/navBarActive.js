/**
 * Created by wen on 2017/3/22.
 */
import * as types from './../mutations';
export default {
    state: {
        activeIndex: 1
    },
    getters: {
        getActiveIndex: (state) => {
            return state.activeIndex;
        }
    },
    mutations: {
        [types.SET_NAV_BAR_INDEX](state,payload){
            state.activeIndex = payload.index || 1;
        }
    }
};
