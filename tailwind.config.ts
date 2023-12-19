import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'text-slide': 'text-slide 3s linear ',
        'op':'op 2s ease-in infinite',
        'sliderRight':'sliderRight 0.75s linear',
        'sliderLeft':'sliderLeft 0.75s linear'
      },
      keyframes: {
        'text-slide': {
            '0%, 25%':{
              transform: 'translateX(100%)',
              opacity:'0',
            },

            '25%, 50%':{
              transform: 'translateX(100%)',
              opacity:'0',
            },
            '50%, 100%': {
                transform: 'translateX(0%)',
                opacity:'1',          
            },
        },
        "op":{
            '0%, 25%':{
              boxShadow :'1px 1px 35px rgba(255,255,255,0)'
            },
            '25%, 50%':{
              boxShadow :'1px 1px 35px rgba(255,255,255,0.5)'
            },
            '50%, 75%':{
              boxShadow :'1px 1px 35px rgba(255,255,255,0.5)'
            },
            '75%, 100%':{
              boxShadow :'1px 1px 35px rgba(255,255,255,0)'
            }
        },  
        'sliderRight':{
            // '0%, 25%':{
            //   transform: 'translateX(-100%)',
            // },

            '0%, 50%':{
              transform: 'translateX(-100%)',
            },
            '50%, 100%': {
                transform: 'translateX(0%)',       
            },
        },
        'sliderLeft':{
          // '0%, 25%':{
          //     transform: 'translateX(100%)',
          //   },

            '0%, 50%':{
              transform: 'translateX(100%)',
            },
            '50%, 100%': {
                transform: 'translateX(0%)',         
            }
        }
      },
      screens: {
        'tv': '2200px',
      },
      container: {
        screens : {
          sm:'640px',
          md:'768px',
          lg:'1024px',
          xl:'1280px',
          xxl:'1536px',
          tv: '2200px'
        }
      },
  plugins: [],
}}}
export default config
