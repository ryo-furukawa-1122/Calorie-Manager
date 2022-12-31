import { render } from '@testing-library/react';
import React from 'react'
import Select from 'react-select'
import { ReactDOM } from 'react';


const CalorieCalc = () => {
    const activity = [
        { value: '1', label: 'Non-active'},
        { value: '1.2', label: 'Normal'},
        { value: '1.5', label: 'Active'}
    ]
    class CalorieIn extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this)
        }
        handleChange(e) {
            this.props.valueChange(e.target.value)
        }
        render() {
            const newValue = this.props.value
            return (
                <input type={'text'} value={newValue} onChange={this.handleChange} />
            )
        }
    }

    class CalorieOut extends React.Component {
        render() {
            return (
                <div>{this.props.value}</div>
            )
        }
    }

    class Calculator extends React.Component {
        constructor(props) {
            super(props)
            this.changeValue = this.changeValue.bind(this)
            this.state = {
                value1: 0,
                value2: 0,
                answer: 0
            }
        }
        changeValue1(newValue) {
            let ans = parseInt(newValue) * parseInt(this.state.value2)
            this.setState({
                value1: newValue,
                answer: ans
            })
        }
        changeValue2(newValue) {
            let ans = parseInt(newValue) * parseInt(this.state.value1)
            this.setState({
                value2: newValue,
                answer: ans
            })
        }
        render() {
            const newValue1 = this.state.value1
            const newValue2 = this.state.value2
            return (
                <div>
                    <CalorieIn value={newValue1} valueChange={this.changeValue1} />
                    <CalorieIn value={newValue2} valueChange={this.changeValue2} />
                    <Select options={activity} />
                    <CalorieOut value={this.state.answer} />
                </div>
            )
        }
    }
    ReactDOM.render(<Calculator />, document.getElementById('root'))
}

export default CalorieCalc