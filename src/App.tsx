import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// routes
// theme
import ThemeProvider from "./theme";
// components
import { StyledChart } from "./components/chart";
import ScrollToTop from "./components/scroll-to-top";
import React from "react";
import Router from "./routes";
import { configureStoreWith } from "./app/store";

// ----------------------------------------------------------------------
// const isAuthenticated = tokenValidation();
const store = configureStoreWith();

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
export const RootState = typeof store.getState;
export const AppDispatch = typeof store.dispatch;
export const ReduxStore = typeof store;
