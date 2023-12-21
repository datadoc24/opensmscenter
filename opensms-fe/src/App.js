import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
