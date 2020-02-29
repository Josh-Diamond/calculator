import React from 'react'

export default function PlusMinusButton({ symbol, update }) {
    return (
        // onClick={() => update(symbol)} ..took off because broken
        <div className='button'>
            <div className='diamond'>
                <h4 className={'plus-minus'}>{symbol}</h4>
            </div>
        </div>
    )
}
