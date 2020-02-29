import React from 'react'

export default function Display({ calc }) {
    return (
        <div className='display'>
            <h1 className='display-digit'>{calc}</h1>
        </div>
    )
}
