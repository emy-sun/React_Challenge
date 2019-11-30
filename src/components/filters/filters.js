import React, { Component } from 'react'

import './filters.css'

export default class Filter extends Component {
  buttons = [
    { name: 'name', label: 'Sort by name' },
    { name: 'price', label: 'Sort by price' },
  ]

  render() {
    const { filter, onFilterChange } = this.props

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name
      const clazz = !isActive ? 'button' : 'button-secondary'

      return (
        <button
          key={name}
          className={`button ${clazz}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      )
    })

    return <div className="filter">{buttons}</div>
  }
}
