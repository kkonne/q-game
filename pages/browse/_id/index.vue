<template>
  <div id="videos">
      <nuxt-child/>
      
      <h1>Browse your favorite games 🚀</h1>


      <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">
                Name
            </th>
            <th class="text-left">
                Rating
            </th>
            <th class="text-left">
                Platforms
            </th>
            </tr>
        </thead>
        <tbody>
            <tr
             v-for="game in $store.state.browseGames.results"
             :key="game.id"
            >
            <td>
                <nuxt-link :to="`/games/${game.id}`" class="text-decoration-none">
                    <b><span style="color: black !important">{{ game.name }}</span></b>
                </nuxt-link>
            </td>
            <td>
                <v-row
                    align="center"
                    class="mx-0"
                >
                    <v-rating
                    :value="game.rating"
                    color="grey darken-3"
                    background-color="grey darken-3"
                    dense
                    half-increments
                    readonly
                    size="18"
                    ></v-rating>

                    <!-- <div class="grey--text ml-4">
                    {{ game.rating }}
                    </div> -->
                </v-row>
            </td>
            <td>
                <v-row align="center" class="mx-0">
                    <div class="platform" v-for="platform in game.parent_platforms" :key="platform.id">
                        <v-icon v-if="platform.platform.slug == 'xbox'" color="grey darken-3" class="ma-1" size="1rem">mdi-microsoft-xbox</v-icon>
                        <v-icon v-if="platform.platform.slug == 'pc'" color="grey darken-3" class="ma-1" size="1rem">mdi-microsoft-windows</v-icon>
                        <v-icon v-if="platform.platform.slug == 'playstation'" color="grey darken-3" class="ma-1" size="1rem">mdi-sony-playstation</v-icon>
                        <v-icon v-if="platform.platform.slug == 'nintendo'" color="grey darken-3" class="ma-1" size="1rem">mdi-nintendo-game-boy</v-icon>
                        <v-icon v-if="platform.platform.slug == 'ios'" color="grey darken-3" class="ma-1" size="1rem">mdi-apple-ios</v-icon>
                        <v-icon v-if="platform.platform.slug == 'android'" color="grey darken-3" class="ma-1" size="1rem">mdi-android-debug-bridge</v-icon>
                        <v-icon v-if="platform.platform.slug == 'mac'" color="grey darken-3" class="ma-1" size="1rem">mdi-desktop-mac</v-icon>
                        <v-icon v-if="platform.platform.slug == 'linux'" color="grey darken-3" class="ma-1" size="1rem">mdi-linux</v-icon>
                    </div>
                </v-row>
                
            </td>
            </tr>
        </tbody>
        </template>
      </v-simple-table>

    <div class="text-center my-5">
        <nuxt-link :to="`/browse/${parseInt(this.$route.params.id) - 1}`" class="text-decoration-none">
            <v-btn
            color="secondary"
            elevation="4"
            v-if="$store.state.browseGames.previous"
            >Previous page</v-btn>
        </nuxt-link>
        <nuxt-link :to="`/browse/${parseInt(this.$route.params.id) + 1}`" class="text-decoration-none">
            <v-btn
            color="secondary"
            elevation="4"
            v-if="$store.state.browseGames.next"
            >Next page</v-btn>
        </nuxt-link>
        
    </div>

      
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

    async fetch({$axios, store, params}){
        const options = {
        method: 'GET',
        url: `https://rawg-video-games-database.p.rapidapi.com/games?key=7978f5feb2bb422b9a5760ce679dd368&page=${params.id}`,
        headers: {
            'x-rapidapi-key': '33d05ab973mshbed0cbad31809e8p1670fcjsne0a172ca1188',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        }
        };

        const response = await $axios.request(options)
        const browseGames = response.data;
        
        store.commit('SET_BROWSE_GAMES', browseGames);
    },
}
</script>

<style scoped>

</style>