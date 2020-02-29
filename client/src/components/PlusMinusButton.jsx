import React from 'react'

export default function PlusMinusButton({ symbol, update }) {
    return (
        <div className='button' onClick={() => update(symbol)}>
            <div className='diamond'>
                <h4 className={'plus-minus'}>{symbol}</h4>
            </div>
        </div>
    )
}
