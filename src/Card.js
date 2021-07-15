import React, { useState } from 'react'
import Result from './Result'
import Booth from './Booth'

const options = [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]

export default function Card(props) {
    const [state, setState] = useState('open')

    function vote(index) {
        options[index].votes++
        setState('closed')
        total++
    }

    let title = 'Esse é um projeto React?'
    let total = options.reduce((x, y) => x + y.votes, 0)
    let card
    if (state === 'open'){
        card = (
            <Booth options={options} onVote={vote} title={title}/>
        )
    } else {
        card = (
            <Result options={options} total={total}/>
        )
    }

    return (
        <div className='card'>
            {card}
        </div>
    )
}