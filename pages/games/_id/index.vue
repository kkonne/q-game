<template>
  <div>
      <v-img width="100%" height="70vh" v-if="game.background_image" :src="game.background_image" />

      <h1 class="display-3 text-uppercase font-weight-bold my-5 py-3">{{ game.name }}</h1>

      <v-row class="my-3 mx-1" v-if="game.alternative_names">
        <v-chip class="mr-2 mb-1" color="red lighten-3" dark v-for="name in game.alternative_names" :key="name" >{{ name }}</v-chip>
      </v-row>

      <v-row class="my-5 py-3">
        <v-col xs="12" lg="8" xl="10">
          <div v-if="game.description">
            <p class="text-h4">About</p>
            <p class="text-h5">{{ game.description_raw }}</p>
          </div>
        </v-col>

        <v-col xs="12" lg="4" xl="2">
          <div class="genre" v-if="game.genres">
            <p class="text-h6 font-weight-light text--disabled" color="red">Genre</p>
            <p class="text-h5 text--secondary" v-for="genre in game.genres" :key="genre.id">{{ genre.name }}</p>
          </div>

          <div class="developer" v-if="game.developers">
            <p class="text-h6 font-weight-light text--disabled" color="red">Developer</p>
            <p class="text-h5 text--secondary" v-for="developer in game.developers" :key="developer.id">{{ developer.name }}</p>
          </div>

          <div class="publisher" v-if="game.publishers">
            <p class="text-h6 font-weight-light text--disabled" color="red">Publisher</p>
            <p class="text-h5 text--secondary" v-for="publisher in game.publishers" :key="publisher.id">{{ publisher.name }}</p>
          </div>

          <div class="released" v-if="game.released">
            <p class="text-h6 font-weight-light text--disabled" color="red">Released</p>
            <p class="text-h5 text--secondary">{{ game.released.split("-")[2] + "." + game.released.split("-")[1] + "." + game.released.split("-")[0] + "." }}</p>
          </div>

          <div class="website" v-if="game.website">
            <p class="text-h6 font-weight-light text--disabled" color="red">Website</p>
            <a :href="game.website" target="_blank" class="text-decoration-none text-break"><p class="text-h5 text--secondary">{{ game.website }}</p></a>
          </div>
          
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <div class="platforms my-5">
        <p class="text-h4">Platforms</p>

        <v-row align="center" class="mx-0 my-3">
            <div class="platform" v-for="platform in game.parent_platforms" :key="platform.id">
                <v-btn class="mr-4" color="red lighten-3" elevation="2" fab v-if="platform.platform.slug == 'xbox'">
                  <v-icon color="grey darken-3" class="ma-1 mx-2" size="2.5rem">mdi-microsoft-xbox</v-icon>
                </v-btn>
                <v-btn class="mr-4" color="red lighten-3" elevation="2" fab v-if="platform.platform.slug == 'pc'">
                  <v-icon v-if="platform.platform.slug == 'pc'" color="grey darken-3" class="ma-1 mx-2" size="2.5rem">mdi-microsoft-windows</v-icon>
                </v-btn>
                <v-btn class="mr-4" color="red lighten-3" elevation="2" fab v-if="platform.platform.slug == 'playstation'">
                  <v-icon v-if="platform.platform.slug == 'playstation'" color="grey darken-3" class="ma-1 mx-2" size="2.5rem">mdi-sony-playstation</v-icon>
                </v-btn> 
                <v-btn class="mr-4" color="red lighten-3" elevation="2" fab v-if="platform.platform.slug == 'nintendo'">
                  <v-icon v-if="platform.platform.slug == 'nintendo'" color="grey darken-3" class="ma-1 mx-2" size="2.5rem">mdi-nintendo-game-boy</v-icon>
                </v-btn>
                <v-btn class="mr-4" color="red lighten-3" elevation="2" fab v-if="platform.platform.slug == 'ios'">
                  <v-icon v-if="platform.platform.slug == 'ios'" color="grey darken-3" class="ma-1 mx-2" size="2.5rem">mdi-apple-ios</v-icon>
                </v-btn>
                <v-btn class="mr-4" color="red lighten-3" elevation="2" fab v-if="platform.platform.slug == 'android'">
                  <v-icon v-if="platform.platform.slug == 'android'" color="grey darken-3" class="ma-1 mx-2" size="2.5rem">mdi-android-debug-bridge</v-icon>
                </v-btn>
                <v-btn class="mr-4" color="red lighten-3" elevation="2" fab v-if="platform.platform.slug == 'mac'">
                  <v-icon v-if="platform.platform.slug == 'mac'" color="grey darken-3" class="ma-1 mx-2" size="2.5rem">mdi-desktop-mac</v-icon>
                </v-btn>
                <v-btn class="mr-4" color="red lighten-3" elevation="2" fab v-if="platform.platform.slug == 'linux'">
                  <v-icon v-if="platform.platform.slug == 'linux'" color="grey darken-3" class="ma-1 mx-2" size="2.5rem">mdi-linux</v-icon>
                </v-btn>
            </div>
        </v-row>
      </div>

      <br>

      <div class="tags my-5">
        <p class="text-h4">Tags</p>
        <v-row align="center" class="my-3 mx-0">
          <v-chip class="ma-1" color="red darken-5" outlined dark v-for="tag in game.tags" :key="tag.id" >{{ tag.name }}</v-chip>
        </v-row>
      </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "About"
  },

  props: ["game"],

  created(){
    console.log(this.game);
  }
}
</script>

<style>

</style>