import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <label htmlFor="fruit-filter">Filter These Fruits: </label>
                <input type="text" name="fruit-filter" />
            </div>
        )
    }
}

export default Input