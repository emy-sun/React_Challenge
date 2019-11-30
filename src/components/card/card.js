import React, { Component } from 'react'

import '../app'
import '../../services/car-service'
import './card.css'

export default class Card extends Component {
  render() {
    const { carService } = this.props
    const cards = carService.map(item => (
      <div className="cardItem">
        <img src={item.image}></img>
        <h1>{item.name}</h1>
        <h4>{item.price} $</h4>
      </div>
    ))

    return <div className="container">{cards}</div>
  }
}
