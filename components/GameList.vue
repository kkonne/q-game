<template>
    <div>

        <v-card width="100%" dark hover elevation="10" style="border-radius:20px">
            <v-img height="160" :src="game.background_image"></v-img>
            
            <v-card-text class="mt-1 mb-n4">
                <v-row
                    align="center"
                    class="mx-0"
                >
                    <div class="platform" v-for="platform in game.parent_platforms" :key="platform.id">
                        <v-icon v-if="platform.platform.slug == 'xbox'" color="grey lighten-2" class="ma-1" size="1rem">mdi-microsoft-xbox</v-icon>
                        <v-icon v-if="platform.platform.slug == 'pc'" color="grey lighten-2" class="ma-1" size="1rem">mdi-microsoft-windows</v-icon>
                        <v-icon v-if="platform.platform.slug == 'playstation'" color="grey lighten-2" class="ma-1" size="1rem">mdi-sony-playstation</v-icon>
                        <v-icon v-if="platform.platform.slug == 'nintendo'" color="grey lighten-2" class="ma-1" size="1rem">mdi-nintendo-game-boy</v-icon>
                        <v-icon v-if="platform.platform.slug == 'ios'" color="grey lighten-2" class="ma-1" size="1rem">mdi-apple-ios</v-icon>
                        <v-icon v-if="platform.platform.slug == 'android'" color="grey lighten-2" class="ma-1" size="1rem">mdi-android-debug-bridge</v-icon>
                        <v-icon v-if="platform.platform.slug == 'mac'" color="grey lighten-2" class="ma-1" size="1rem">mdi-desktop-mac</v-icon>
                        <v-icon v-if="platform.platform.slug == 'linux'" color="grey lighten-2" class="ma-1" size="1rem">mdi-linux</v-icon>
                    </div>
                </v-row>
            </v-card-text>

            <v-card-title>{{ game.name }}</v-card-title>

            <v-card-text>
                <v-row class="pb-1">
                    <v-chip v-for="genre in game.genres" :key="genre.id" class="mb-1 ml-2" color="red accent-2" outlined>{{ genre.name }}</v-chip>
                </v-row>
            </v-card-text>

        </v-card>
    </div>
</template>

<script>
export default {
    props: ["game"],
}
</script>

<style>

</style>