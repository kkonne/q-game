<template>
  <div>
      <h1>Editing {{ game.name }}</h1>

      <nuxt-link :to="`/games/${game.id}`">
        <button>Go back to game</button>
      </nuxt-link>
  </div>
</template>

<script>
export default {
  head: {
    title: "Edit"
  },
    
  props: ["game"]
}
</script>

<style>

</style>