export const darkTheme = {
  palette: {
    type: 'dark' // Switching the dark mode on is a single property value change.
  }
}

export const lightTheme = {
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#3f51b5'

      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#ff1148'
    }
  },
  status: {
    danger: 'orange'
  }
}
