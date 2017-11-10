import React, { Component } from 'react';
import { Card } from 'antd';

import Offer from '../Offer';

// const offers = [
//   { from: "Таллин", to: "Берлин", date: "20/10/2017", price: "20eu"},
//   { from: "Таллин", to: "Берлин", date: "21/10/2017", price: "5eu"},
//   { from: "Таллин", to: "Берлин", date: "22/10/2017", price: "6eu"},
//   { from: "Таллин", to: "Берлин", date: "21/10/2017", price: "10eu"},
//   { from: "Таллин", to: "Берлин", date: "20/10/2017", price: "30eu"},
// ];

class OffersList extends Component {
  render() {
    const offerItems = this.props.data.map((offer,i) => {
      return(
        <Offer key={i} date={offer.date} price={offer.price} />
      )
    });
    return(
      <Card title="Выберите рейс" extra={<a href="#">Еще</a>} noHovering>
        {offerItems}
      </Card>
    )
  }
}

export default OffersList;
