import React from 'react'

export default function Result(props) {
    const results = props.options.map((option) => (
        <li key={option.name}>{option.name} - {option.votes} votos ({((option.votes/total())*100).toFixed(1)}%)</li>
    ))

    function total() {
        return props.options.reduce((x, y) => x + y.votes, 0)
    }

    return (
        <div>
            <h1>Resultados</h1>
            <ol>
                {results}
            </ol>
        </div>
    )
}