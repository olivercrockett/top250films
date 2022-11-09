import { createStore } from 'vuex'

export default createStore({
  state: {
      movie: {},
      banner: true,
  },
  getters: {
      movie: state => state.movie,
      banner: state => state.banner,
  },
  mutations: {
      setMovie(state, movie) {
          state.movie = movie;
      },
      setBanner(state) {
          state.banner = !state.banner;
      }
  },
  actions: {
      setMovie({ commit }, movie) {
          commit('setMovie', movie);
      },
      setBanner({ commit }) {
          commit('setBanner');
      }
  },
})
