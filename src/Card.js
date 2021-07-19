import React, { useState } from 'react'
import Result from './Result'
import Booth from './Booth'

export default function Card(props) {
    const [state, setState] = useState('open')

    function vote(index) {
        props.options[index].votes++
        setState('closed')
    }

    let card
    if (state === 'open'){
        card = (
            <div>
                <h1>{props.title}</h1>
                <Booth options={props.options} onVote={vote}/>
            </div>
        )
    } else {
        card = (
            <Result options={props.options}/>
        )
    }

    return (
        <div className='card'>
            {card}
        </div>
    )
}