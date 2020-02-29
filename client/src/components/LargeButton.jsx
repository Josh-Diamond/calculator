import React from 'react'

export default function LargeButton({ symbol, update }) {
    return (
        <div className='large-button' onClick={()=> update(symbol)}>
            <div className='large-diamond'>

            </div>
            <div className='large-diamond-2'>
                    
            </div>
            <div className='large-rectangle'>
                {/* <h4>{symbol}</h4> */}
            </div>
            <div className='large-button-symbol'>
                <h4 className='clear'>CLEAR</h4>
            </div>
        </div>
    )
}
