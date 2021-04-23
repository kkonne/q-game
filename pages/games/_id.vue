<template>
  <div>
      <nuxt-child :game="$store.state.currentGame" />
  </div>
</template>

<script>
export default {
    head() {
        return {
            titleTemplate: `%s ${this.$store.state.currentGame.name}`
        }
    },

    async fetch({$axios, store, params}){
        const options = {
            method: 'GET',
            url: `https://rawg-video-games-database.p.rapidapi.com/games/${params.id}?key=7978f5feb2bb422b9a5760ce679dd368`,
            headers: {
                'x-rapidapi-key': '33d05ab973mshbed0cbad31809e8p1670fcjsne0a172ca1188',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            }
        };

        const response = await $axios.request(options)
        const game = response.data;
        console.log(response.data);
        
        store.commit('SET_CURRENT_GAME', game);
    },
}
</script>

<style>

</style>