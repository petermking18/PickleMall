import { createTheme } from "@material-ui/core/styles"

const { palette } = createTheme()
const theme = createTheme({
  palette: {
    rallyBlue: palette.augmentColor({ main: "#bbf1ff" }),
    volleyBlue: palette.augmentColor({ main: "#237d91" }),
    pickleGreen: palette.augmentColor({ main: "#49c13d" }),
    kitchenGreen: palette.augmentColor({ main: "#367236" }),
    softServe: palette.augmentColor({ main: "#f4cbf3" }),
    taupe: palette.augmentColor({ main: "#e2dfd5" }),
    deepBlue: palette.augmentColor({ main: "#002e43" }),
    brightWhite: palette.augmentColor({ main: "#ffffff" }),
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 100,
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        textTransform: 'unset'
      },
    },
  },
})

export default theme
