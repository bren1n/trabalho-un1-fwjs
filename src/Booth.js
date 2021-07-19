import React from 'react'

export default function Booth(props) {
    const options = props.options.map((option, index) => (
        <button key={option.name} className="button" onClick={() => props.onVote(index)}>{option.name}</button>
    ))

    return (
        <div>
            {options}
        </div>
    )
}