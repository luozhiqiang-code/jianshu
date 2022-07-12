import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "./common/header";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
// import Detail from "./pages/detail";
import Detail from "./pages/detail/loadble";
import Login from "./pages/login";
import Write from "./pages/write";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<Home />} />

              <Route path="detail" element={<Detail />}>
                <Route path=":id" element={<Detail />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="write" element={<Write />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
