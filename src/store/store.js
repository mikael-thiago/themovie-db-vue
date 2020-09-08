import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sidebar: false
    },
    mutations: {
        deactivateSidebar(state) {
            state.sidebar = false;
        },
        activateSidebar(state) {
            state.sidebar = true;
        }
    }
});

export default store;