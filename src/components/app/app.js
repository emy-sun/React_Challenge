import React, { Component } from 'react'

import './app.css'
import Card from '../card'
import Filter from '../filters'
import CarService from './../../services'

export default class App extends Component {
  carService = new CarService()

  state = {
    filter: '',
  }

  filter(items, filter) {
    switch (filter) {
      case 'name':
        return items.sort((a, b) => {
          let nameA = a.name.toLowerCase()
          let nameB = b.name.toLowerCase()
          if (nameA < nameB) return -1
          if (nameA > nameB) return 1
          return 0
        })
      case 'price':
        return items.sort((a, b) => a.price - b.price)
      default:
        return items
    }
  }

  onFilterChange = filter => {
    this.setState({ filter })
  }

  render() {
    const { filter } = this.state
    const applyFilter = this.filter(this.carService.car, filter)

    return (
      <div>
        <Filter filter={filter} onFilterChange={this.onFilterChange} />
        <Card carService={applyFilter} />
      </div>
    )
  }
}
