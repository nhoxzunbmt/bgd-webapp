import axios from 'axios'
export default {
  async nuxtServerInit ({ dispatch, commit }, { req, res }) {
    if (req.token) {
      commit('SET_USER', req.token)
    }
  },

  async CATEGORIES ({ state, getters }) {
    const { data } = await axios.get(`http://local.bepgiadinh.com/wp-json/wp/v2/categories`)
    return data
  }

}
