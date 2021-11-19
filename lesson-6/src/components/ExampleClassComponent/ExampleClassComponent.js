import React from 'react'
import PropTypes from 'prop-types'

export default class ExampleClass extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        text1: PropTypes.string,
    }

    static defaultProps = {
        text1: 'Empty Text 1',
    }

    static Sizes = {
        s: '11',
        m: '14',
        l: '21',
    }

    constructor(props) {
        super(props)

        console.log('constructor')

        this.state = { count: 0 }
        this.timer = null
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', { prevProps, prevState })

        this.timer = setTimeout(() => console.log('time is out'), 1000)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')

        clearTimeout(this.timer)
    }

    handleClick = () => {
        this.setState(
            (currentState) => {
                return { count: currentState.count + 1 }
            },
            () => {
                console.log('updated')
            }
        )
    }

    render() {
        console.log('render')

        return (
            <div className="bordered">
                <p>
                    Example Class Component - {this.props.text},{' '}
                    {this.props.text1}
                </p>
                <p>Counter - {this.state.count}</p>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}
