<template>
  <div id="videos">
      <p>Noice</p>
  </div>
</template>

<script>
export default {
    name: "videos",

    head: {
        title: 'Browse games - Q Game',
        meta: [
        { hid: 'description', name: 'description', content: 'Q Game - Browse through your favorite games' }
        ],
    },

    async fetch({$axios, store}){
        const options = {
        method: 'GET',
        url: 'https://rawg-video-games-database.p.rapidapi.com/games?key=7978f5feb2bb422b9a5760ce679dd368',
        headers: {
            'x-rapidapi-key': '33d05ab973mshbed0cbad31809e8p1670fcjsne0a172ca1188',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        }
        };

        const response = await $axios.request(options)
        const browseGames = response.data;

        console.log(response.data);
        // "https://api.rawg.io/api/games?key=7978f5feb2bb422b9a5760ce679dd368&page=2"
        
        store.commit('SET_BROWSE_GAMES', browseGames);
    },
}
</script>

<style scoped>

</style>