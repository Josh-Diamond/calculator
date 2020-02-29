import React from 'react'

export default function DecimalButton({ symbol }) {
    return (
        <div className='button'>
            <div className='diamond'>
                <h4 className={'decimal'}>{symbol}</h4>
            </div>
        </div>
    )
}
