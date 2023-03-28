import { display, positions } from "@mui/system";

const uiConfigs = {
  style: {
    gradientBgImage: {
      dark: {
        backgroundImage:
          "linear-gradient(to top,rgba(0, 0, 0, 1), rgba(0, 0, 0, 0",
      },
      light: {
        backgroundImage:
          "linear-gradient(to top,rgba(245, 245, 245, 1), rgba(0, 0, 0, 0",
      },
    },
    horizontalGradientBgImage: {
      dark: {
        backgroundImage:
          "linear-gradient(to right,rgba(0, 0, 0, 1), rgba(0, 0, 0, 0",
      },
      light: {
        backgroundImage:
          "linear-gradient(to right,rgba(245, 245, 245, 1), rgba(0, 0, 0, 0",
      },
    },
    typoLiens: (lines, textAlign) => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebKitBoxOrident: "vertical",
      WebkitLineClamp: lines,
    }),
    mainContent: {
      maxWidth: "1366px",
      margin: "auto",
      padding: 2,
    },
    backgroundImage: (imgPath) => ({
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "darkgrey",
      backgroundImage: `url${imgPath}`,
    }),
  },
  size: {
    sidebarWidth: "300px",
    contentMaxWidth: "1366px",
  },
};
