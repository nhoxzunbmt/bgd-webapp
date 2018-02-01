import Vuex from 'vuex'
import actions from './actions'
export const state = () => ({
  sidebar: false
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
export default () => {
  return new Vuex.Store({
    state: {
      token: ''
    },
    mutations,
    actions
  })
}
