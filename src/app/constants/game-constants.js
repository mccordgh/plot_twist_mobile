export default {
    FONT_SIZE: 32,

    FPS: 60,

    // Iphone 7 in Landscape mode
    GAME_HEIGHT: 551,
    GAME_WIDTH: 980,

    SPRITE_HEIGHT: 80,
    SPRITE_WIDTH: 80,

    CREATURE_SPEED: 100,

    SPATIAL_GRID_SIZE: 64,

    TYPES: {
        MONSTER: 'monster',
        HOUSE: 'house',
        LANE: 'lane',
        HERO: 'hero',
        PLOT: 'plot',
        GARDEN: 'garden',
        UI: 'ui',
    },

    FINGER_WIDTH: 16,

    rndIndex: (arr) => arr[Math.floor(Math.random() * (arr.length))],

    BASE_PATH: window.location.href,
}