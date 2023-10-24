/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        fire: '#F57D31',
        fireLO: '#F57D3188',
        water: '#6493EB',
        waterLO: '#6493EB88',
        grass: '#74CB48',
        grassLO: '#74CB4888',
        fighting:'#C12239',
        fightingLO:'#C1223988',
        flying:'#A891EC',
        flyingLO:'#A891EC88',
        steel:'#B7B9D0',
        steelLO:'#B7B9D088',
        psychic:'#FB5584',
        psychicLO:'#FB558488',
        rock:'#B69E31',
        rockLO:'#B69E3188',
        fairy:'#E69EAC',
        fairyLO:'#E69EAC88',
        ground:'#DEC16B',
        groundLO:'#DEC16B88',
        ghost:'#70559B',
        ghostLO:'#70559B88',
        ice:'#9AD6DF',
        iceLO:'#9AD6DF88',
        dark:'#75574C',
        darkLO:'#75574C88',
        bug:'#A7B723',
        bugLO:'#A7B72388',
        normal:'#AAA67F',
        normalLO:'#AAA67F88',
        dragon:'#7037FF',
        dragonLO:'#7037FF88',
        electric:'#F9CF30',
        electricLO:'#F9CF3088',
        poison:'#A43E9E',
        poisonLO:'#A43E9E88',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotateY(0)' },
          '80%': {
            transform: 'rotateX(30deg)'
          },
          '100%': {
            transform: 'rotateY(0)'
          }
        },
      },
      animation: {
        'move': 'rotate 0.4s linear infinite',
      },
    },
  },
  plugins: [],
}

