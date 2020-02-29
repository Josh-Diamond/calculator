import React from 'react'

export default function MultiButton({ symbol, update }) {
    return (
        <div className='button' onClick={() => update(symbol)}>
            <div className='diamond'>
                <h4 className={'multiply'}>{symbol}</h4>
            </div>
        </div>
    )
}
