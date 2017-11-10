import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';

const gridStyle = {
  width: '100%',
};

class Offer extends Component {
  render() {
    return(
      <Card.Grid style={gridStyle}>
        <Row>
          <Col span={8}>{this.props.date}</Col>
          <Col span={4} offset={12}>{this.props.price}</Col>
        </Row>
      </Card.Grid>
    )
  }
}

export default Offer;
