export const state = () => ({
    games: [],
    currentGame: {},
    browseGames: [],
})

export const mutations = {
    SET_GAMES(state, games){
        state.games = games
    },

    SET_CURRENT_GAME (state, game) {
        state.currentGame = game
    },

    SET_BROWSE_GAMES (state, browseGames) {
        state.browseGames = browseGames
    },
}