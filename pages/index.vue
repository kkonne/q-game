<template>
  <div id="homepage">

    <h1 class="display-3 font-weight-bold my-5">Trending games 🔥</h1>

    <v-row class="my-5">
        <v-col xs="12" sm="6" md="4" lg="3" xl="2" v-for="game in games" :key="game.id">
          <nuxt-link :to="`/games/${game.id}`" class="text-decoration-none">
            <GameList :game="game" />
          </nuxt-link>
        </v-col>
    </v-row>

  </div>
</template>

<script>
import GameList from "../components/GameList"

export default {
  components: {
    GameList
  },

  async asyncData({$axios}){
    const options = {
      method: 'GET',
      url: 'https://rawg-video-games-database.p.rapidapi.com/games?key=7978f5feb2bb422b9a5760ce679dd368',
      headers: {
        'x-rapidapi-key': '33d05ab973mshbed0cbad31809e8p1670fcjsne0a172ca1188',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
      }
    };

    const response = await $axios.request(options)
    const games = response.data.results;
    
    console.log(response.data.results);
    
    return {
      games
    }
  }
}
</script>

<style>
</style>
