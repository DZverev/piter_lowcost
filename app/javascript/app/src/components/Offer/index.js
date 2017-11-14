import React, { Component } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";

import "./style.css";

const gridStyle = {
  width: "100%",
};

class Offer extends Component {
  handleClick = () => {
    this.props.click();
  }

  render() {
    return(
      <Card className={this.props.isSelected ? "selected" : ""} onClick={this.handleClick} style={gridStyle}>
        <Row>
          <Col span={8}>{this.props.date}</Col>
          <Col span={4} offset={12}>{this.props.price}</Col>
        </Row>
      </Card>
    );
  }
}

export default Offer;
