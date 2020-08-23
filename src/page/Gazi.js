import React, { useState, useEffect } from 'react';
import Tow from './Tow.js'

export default function Gazi() {
    const [a, set] = useState(1)
    useEffect(() => {
        console.log(1)
    });
    // function handleclick() {
    //     set(state => ({
    //         a: state.a + 1
    //     }))
    // }
    return (
        <>
            <div onClick={()=>{set(a+1)}}>{a}</div>
            <Tow />
        </>
    )
}
