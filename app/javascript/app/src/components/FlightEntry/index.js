import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SelectCity from '../SelectCity';
import OffersList from '../OffersList';

import { API_PATH } from '../../config/development';

class FlightEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityFrom: "",
      cityTo: "",
      offers: []
    };
  }

  handleSelectChange = (name, value) => {
    this.setState({
      [name]: value,
    });
    setTimeout(() => this.getOffers());
  }

  getOffers = () => {
    if (this.state.cityFrom && this.state.cityTo) {
      fetch(`${API_PATH}/data.json?cityFrom=${this.state.cityFrom}&cityTo=${this.state.cityTo}`)
        .then(response => response.json())
        .then(data => this.setState({offers: data}));
    }
  }

  render() {
    return(
      <div>
        <Row>
          <Col span={5}>
            <SelectCity name="cityFrom" onSelectChange={this.handleSelectChange} />
          </Col>
          <Col span={5}>
            <SelectCity name="cityTo" onSelectChange={this.handleSelectChange} />
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <OffersList data={this.state.offers} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default FlightEntry;
