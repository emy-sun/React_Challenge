import React, {Component} from 'react';

import '../app';
import '../../services/car-service';
import './card.css';
import CarService from '../../services/car-service';

export default class Card extends Component {

    carService = new CarService();

    render () {

        const cards = this.carService.car.map((item) => 
            <div className='cardItem'>
                <img src={item.image}></img>
                <h1>{item.name}</h1>
                <h4>{item.price}</h4>
            </div>);

    return (<div className='container'>{cards}</div>)
    }
}


