/**
 * Created by wen on 2017/3/15.
 */
import * as types from './../mutations';
export default {
    state: {
        HSL: []
    },
    getters: {
        getHSL: (state) => {
            state.HSL.push(Math.round(Math.random()*359));
            state.HSL.push(Math.round(Math.random()*100));
            state.HSL.push(Math.round(Math.random()*100));
            return state.HSL;
        }
    },
    mutations: {
        [types.SET_COLOR_PICKER](state,payload){
            if (Object.prototype.toString.call(payload.HSL) !== "[object Array]"){
                state.HSL = [0,0,0];
            }else {
                state.HSL = payload.HSL;
            }
        }
    }
};
