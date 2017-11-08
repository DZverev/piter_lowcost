import React, { Component } from 'react';

import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';

import FlightEntry from '../components/FlightEntry';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={ruRU}>
        <div>
          <FlightEntry />
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
