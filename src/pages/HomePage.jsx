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

   

    return (
        <section>
           
           <img className='home-page'
        src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
        </section >
    )
}