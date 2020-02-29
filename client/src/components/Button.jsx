import React from 'react'

export default function Button({ symbol, operator }) {
    return (
        <div className='button'>
            <div className='diamond'>
                <h4 className={operator ? 'operator symbol' : 'symbol'}>{symbol}</h4>
            </div>
        </div>
    )
}
