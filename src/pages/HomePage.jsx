import logoImg from '../assets/img/logo.png'

import { useDispatch, useSelector } from "react-redux"
// import { CHANGE_BY } from "../store/reducers/user.reducer.js"
import { useEffect, useState } from "react"
import { useEffectUpdate } from '../hooks/useEffectUpdate.js'

// const { useState } = React
// const { useSelector, useDispatch } = ReactRedux

export function HomePage() {
    const dispatch = useDispatch()
    const [_count, setCount] = useState(10)
    const count = useSelector(storeState => storeState.count)

    useEffectUpdate(() => {
        console.log('_count:', _count)
        return () => {
            console.log('_count changed:', _count)
        }
    }, [_count])

    function changeCount(diff) {
        setCount(count => count + diff)
        // dispatch({ type: INCREMENT })
        // dispatch({ type: CHANGE_BY, diff })
    }

    return (
        <section>
            <h2>
                Count {_count}
                <button onClick={() => {
                    changeCount(1)
                }}>+</button>
                <button onClick={() => {
                    changeCount(10)
                }}>+10</button>
            </h2 >
            <img src={logoImg} />
        </section >
    )
}