import React from 'react'

export default function DecimalButton({ symbol, update }) {
    return (
        <div className='button' onClick={() => update(symbol)}>
            <div className='diamond'>
                <h4 className={'decimal'}>{symbol}</h4>
            </div>
        </div>
    )
}
