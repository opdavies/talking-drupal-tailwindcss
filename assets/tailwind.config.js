module.exports = {
  content: ["./templates/**/*.twig"],
  theme: {
    colors: {
      blue: {
        100: '#8cc4df',
        200: '#2aaae1',
        800: '#064871',
      },
      gray: '#666666',
      secondary: '#064871',
      white: '#FFFFFF',
      red: 'lightcoral',
    },
    extend: {
      fontFamily: {
        sans: [
          "proxima-nova",
          "Proxima Nova",
          "Open Sans",
          "Gill Sans MT",
          "Gill Sans",
          'Corbel',
          'Arial',
          'sans-serif',
        ]
      },
      spacing: {
        18: '4.5rem',
      }
    }
  }
}
