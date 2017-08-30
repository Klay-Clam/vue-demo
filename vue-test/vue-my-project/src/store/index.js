/**
 * src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 先写一个假数据
const state = {
    totalTime:0,
    list:[{
        name:'Klay',
        avatar: 'https://klay-clam.github.io',
        date:'2017-07-30',
        totalTime:'6',
        comment:'测试静态数据'
    }]
};

export default new Vuex.Store({
    state,
})
