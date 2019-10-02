import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    brands: [],
    currentBrand: {},

    mutations: {
        setBrands(state, payload) {
            state.brands = payload;
        },
        setCurrentBrand(state, payload) {
            state.currentBrand = payload;
        }
    },
    getters: {
        getBrands(state) {
            return state.brands;
        },
        getCurrentBrand(state) {
            return state.currentBrand;
        }
    }

});
