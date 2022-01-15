import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import GlobalStyles from "./styles/globalStyles";

import dark from "./styles/themes/dark";
// import light from "./styles/themes/light";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export { App };
