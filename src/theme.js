import { createTheme } from "@mui/material/styles";

const { palette } = createTheme();
const theme = createTheme({
  palette: {
    rallyBlue: palette.augmentColor({ color: { main: "#bbf1ff" } }),
    volleyBlue: palette.augmentColor({ color: { main: "#237d91" } }),
    pickleGreen: palette.augmentColor({ color: { main: "#49c13d" } }),
    kitchenGreen: palette.augmentColor({ color: { main: "#367236" } }),
    softServe: palette.augmentColor({ color: { main: "#f4cbf3" } }),
    taupe: palette.augmentColor({ color: { main: "#e2dfd5" } }),
    deepBlue: palette.augmentColor({ color: { main: "#002e43" } }),
    brightWhite: palette.augmentColor({ color: { main: "#ffffff" } }),
    lightGray: palette.augmentColor({ color: { main: "#f2f2f2" } }),
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: 100,
            paddingLeft: "1.3rem",
            paddingRight: "1.3rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            textTransform: "unset",
          },
        },
        {
          props: { variant: "text" },
          style: {
            textTransform: "unset",
            borderRadius: 100,
          },
        },
      ],
    },
  },
});

export default theme;
