<template>
    <v-app>
      <v-app-bar app dark color="grey darken-4">

        <v-btn text disabled>Q Game</v-btn>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/browse">Browse</v-btn>
      </v-app-bar>
    
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>

      <v-footer dark padless>
        <v-card
          flat
          tile
          class="grey darken-4 white--text text-center"
        >
          <v-card-text>
            <a href="https://www.linkedin.com/in/josip-leko-00284219a/" target="_blank" class="text-decoration-none">
              <v-btn class="mx-4 white--text" icon>
                <v-icon size="24px">mdi-linkedin</v-icon>
              </v-btn>
            </a>

            <a href="https://github.com/kkonne" target="_blank" class="text-decoration-none">
              <v-btn class="mx-4 white--text" icon>
                <v-icon size="24px">mdi-github</v-icon>
              </v-btn>
            </a>

            <a href="https://www.instagram.com/josip.leko/" target="_blank" class="text-decoration-none"> 
              <v-btn class="mx-4 white--text" icon>
                <v-icon size="24px">mdi-instagram</v-icon>
              </v-btn>
            </a>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Q Game was created through passion for gaming and creating Web apps. This is a simple but powerful platform for browsing and finding new games in seconds. This app is also created to showcase Vuetify and Nuxt.js' ease of use. 
            <br>
            Thanks for visiting
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — Josip Leko
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
