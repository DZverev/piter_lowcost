import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FlightEntry from '../FlightEntry';
import DateRange from  '../DateRange'

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightEntries: [{id: 0}],

      lastCity: undefined
    }
  }

  handleAddNewEntry = () => {
    this.setState(prevState => ({
      flightEntries: prevState.flightEntries.concat({id: prevState.flightEntries.length})
    }));
  };

  handleUpdateLastCity = (value) => {
    this.setState({
      lastCity: value
    })
  };

  render() {
    const flightEntries = this.state.flightEntries.map((e,i) => {
      return(
        <Col key={i} span={6}>
          <FlightEntry
            cityFrom={this.state.lastCity}
            onEntryAdd={this.handleAddNewEntry}
            updateLastCity={this.handleUpdateLastCity}
          />
        </Col>
      )
    });
    return(
      <div>
        <DateRange/>
        <Row>
          {flightEntries}
        </Row>
      </div>
    )
  }
}

export default Schedule;
