import React from 'react'

export default function Result(props) {
    const results = props.options.map((option) => (
        <li key={option.name}>{option.name} - {option.votes} votos ({(option.votes/props.total)*100}%)</li>
    ))

    return (
        <div>
            <h1>Resultados</h1>
            <ol>
                {results}
            </ol>
        </div>
    )
}