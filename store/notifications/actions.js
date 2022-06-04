export default {
    async setList({ commit }) {
        let data = await this.$axios.get('/notifications');
        commit('SET_LIST', data.data);
        // console.log(data);
    },
};
