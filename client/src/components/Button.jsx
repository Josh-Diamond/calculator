import React from 'react'

export default function Button({ symbol, operator, update, divison }) {
    return (
        <div className='button' onClick={() => update(symbol)}>
            <div className='diamond'>
                <h4 className={operator ? 'operator symbol' : 'symbol'}>{divison ? '÷' : symbol}</h4>
            </div>
        </div>
    )
}
