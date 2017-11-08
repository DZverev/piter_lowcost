import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SelectCity from '../SelectCity';
import OffersList from '../OffersList';


class FlightEntry extends Component {
  render() {
    return(
      <div>
        <Row>
          <Col span={5}>
            <SelectCity />
          </Col>
          <Col span={5}>
            <SelectCity />
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <OffersList />
          </Col>
        </Row>
      </div>
    )
  }
}

export default FlightEntry;
