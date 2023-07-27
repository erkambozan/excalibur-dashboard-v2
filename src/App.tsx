// routes
// theme
import ThemeProvider from "./theme";
// components
import { StyledChart } from "./components/chart";
import ScrollToTop from "./components/scroll-to-top";
import React from "react";
import Router from "./routes";

export default function App() {

  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
