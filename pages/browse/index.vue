<template>
    <div id="browse">
        <h1 class="display-4 font-weight-bold my-5">Browse games 🎮</h1>

        <nuxt-link to="/browse/1" class="text-decoration-none">
            <v-btn dark>
                Browse
            </v-btn>
        </nuxt-link>

        <br>

        <p class="my-5">Thanks to this superfast API you can browse and find more about games with astonishing speed and simplicity</p>
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
  }
  </script>
  
  <style scoped>
  
  </style>