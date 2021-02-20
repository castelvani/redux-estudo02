import React from "react";

import { Provider } from "react-redux";

import store from "./store";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

const App: React.FC = () => {
  return (
    <>
      {/* Nas rotas ele fica fora do Switch */}
      <Provider store={store}>
        <Home />
        <AboutUs />
      </Provider>
    </>
  );
};

export default App;
