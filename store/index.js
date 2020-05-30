import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    allCategories: [],
  },
  getters: {
    FILTERED_CATEGORIES: state => categoryId =>  {
      return state.allCategories.filter(el => el.parent_id == categoryId);
    },
    SET_CHECKED_URL_CATEGORIES: state => {
      let url = '';
      const checkedCategories = []
      if (process.browser) {
        url = window.location.href
      }
      state.allCategories.forEach(el => {
        const regexp = new RegExp(`${el.url}`);
        if (url.match(regexp)) {
          checkedCategories.push(el)
        }
      })
      return checkedCategories
    },
  },
  mutations: {
    GET_CATEGORIES: (state, payload) => {
      state.allCategories = payload
    },
  },
  actions: {
    SET_CATEGORIES: async (context, payload) => {
      let response = []
        let {data} = await axios.get('https://cors-anywhere.herokuapp.com/http://api.holypony.ru/catalog/categories?limit=0')
        if (data) {
          response = data.items
        }
      context.commit('GET_CATEGORIES', response)
    }
  }
})

export default store
