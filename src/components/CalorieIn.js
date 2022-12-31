import React from 'react'

const CalorieIn = () => {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.valueChange(e.target.value)
    }
    const newValue = this.props.value
    return (
        <input type={'text'} value={newValue} onChange={this.handleChange} />
    )
}

export default CalorieIn