import React, { Component } from "react";
import { LocaleProvider } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";

import Schedule from "../components/Schedule";

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={ruRU}>
        <div>
          <Schedule />
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
