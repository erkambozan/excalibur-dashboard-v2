import PropTypes from "prop-types";
// @mui
import { CssBaseline } from "@mui/material";

import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
//
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
import customShadows from "./customShadows";
import componentsOverride from "./overrides";
import { trTR } from "@mui/material/locale";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import {tr} from "date-fns/locale";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions = {
    palette,
    shape: { borderRadius: 6 },
    typography,
    shadows: shadows(),
    customShadows: customShadows(),
    locale: trTR,
  };

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <LocalizationProvider adapterLocale={trTR}>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          {children}
        </MUIThemeProvider>
      </LocalizationProvider>
    </StyledEngineProvider>
  );
}
