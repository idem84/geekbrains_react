import React from 'react'
import usePrevious from '../../hooks/usePrevious'

function Example(props) {
    const [count, setCount] = React.useState(0)

    const ref = React.useRef(null)

    const prevCount = usePrevious(count)

    // Используем useMemo для вычисления сложных данных по необходимости, а не на каждый рендер
    // const hardData = React.useMemo(() => {
    //     return 10 * props.partOfHardData
    // }, [props.partOfHardData])

    React.useEffect(() => {
        console.log('componentDidMount hook')

        return () => {
            console.log('componentWillUnmount hook')
        }
    }, [])

    React.useEffect(() => {
        console.log('componentDidUpdate hook', { prevCount, count })
    }, [prevCount, count])

    const handleClick = React.useCallback(() => {
        setCount(count + 1)
    }, [count])

    console.log('render', { ref })

    return (
        <div ref={ref} className="bordered">
            <p>Example - {props.text}</p>
            <p>Counter - {count}</p>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default Example
