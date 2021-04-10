import Vue from 'vue'
import vuex from "vuex";

Vue.use(vuex)

const state = {
  cartList:[],
}

const store = new vuex.Store({
  state,
})

export default store


