import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SelectCity from '../SelectCity';
import OffersList from '../OffersList';

import { API_PATH } from '../../config/development';

class FlightEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityFrom: this.props.cityFrom,
      cityTo: "",
      offers: [],
      selectedEntryId: undefined
    };
  }

  handleSelectChange = (name, value) => {
    this.setState({
      [name]: value,
    });
    setTimeout(() => this.getOffers());
    if (name=="cityTo") {
      setTimeout(() => this.props.updateLastCity(value));
    }
  }

  handleFlightSelection = (id) => {
    this.setState({selectedEntryId: id});
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
          <Col span={12}>
            <SelectCity name="cityFrom" {...this.props} onSelectChange={this.handleSelectChange} />
          </Col>
          <Col span={12}>
            <SelectCity name="cityTo"  onSelectChange={this.handleSelectChange} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <OffersList
              onEntrySelect={this.handleFlightSelection}
              selectedEntryId={this.state.selectedEntryId}
              onEntryAdd={this.props.onEntryAdd}
              data={this.state.offers}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default FlightEntry;
