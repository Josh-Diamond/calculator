import React from 'react'

export default function PlusMinusButton({ symbol, update, calc, setCalc }) {
    const plusMinus = () => {
        setCalc(calc * -1)
    }
    return (
        <div onClick={plusMinus}  className='button'>
            <div className='diamond'>
                <h4 className={'plus-minus'}>{symbol}</h4>
            </div>
        </div>
    )
}
