import React, { Component } from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

var styles = {
  PickupSavings: {
    textDecoration: "underline",
  },
  totalSavings: {
    color: "red",
    fontWeight: 800,
  },
};

export default class PickupSavings extends Component {
  render() {

    const tooltip = (
    <Tooltip id="tooltip">
      <p>
        Picking up your order in the store helps cut costs, and we pass the
        savingd on to you.
      </p>
    </Tooltip>
    );
    return (
      <Row className="show-container">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={StyleSheet.PickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={StyleSheet.totalSavings} md={6}>
          {`$${this.props.price}`}
        </Col>
      </Row>
    );
  }
}
