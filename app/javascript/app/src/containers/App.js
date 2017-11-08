import React, { Component } from 'react';

import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={ruRU}>
        <div>
          App
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
