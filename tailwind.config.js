/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "veryDarkBlue": 'hsl(233, 47%, 7%)',
        "darkDesaturatedBlue": 'hsl(244, 38%, 16%)',
        "softViolet": 'hsl(277, 64%, 61%)',
        "slightWhiteMain": 'hsla(0, 0%, 100%, 0.75)',
        "slightWhiteHeading": 'hsla(0, 0%, 100%, 0.6)'
      },
      fontFamily: {
        "Inter": ["Inter", "sans"],
        "Lexend": ['"Lexend Deca"', "sans"]
      }
    },
  },
  plugins: [],
}

