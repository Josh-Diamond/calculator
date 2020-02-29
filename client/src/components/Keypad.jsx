import React from 'react'
import Button from './Button'
import LargeButton from './LargeButton'
import MultiButton from './MultiButton'
import DecimalButton from './DecimalButton'
import PlusMinusButton from './PlusMinusButton'

export default function Keypad() {
    return (
        <div className='keypad'>
            <div className='row'>
                <Button symbol={'1'} />
                <Button symbol={'2'} />
                <Button symbol={'3'} />
                <Button symbol={'÷'} operator />
            </div>
            <div className='row'>
                <Button symbol={'4'} />
                <Button symbol={'5'} />
                <Button symbol={'6'} />
                <MultiButton symbol={'*'} />
            </div>
            <div className='row'>
                <Button symbol={'7'} />
                <Button symbol={'8'} />
                <Button symbol={'9'} />
                <Button symbol={'+'} operator />
            </div>
            <div className='row'>
                <Button symbol={'0'} />
                <DecimalButton symbol={'.'} />
                <PlusMinusButton symbol={'+/-'} />
                <Button symbol={'-'} operator />
            </div>
            <div className='row'>
                <LargeButton />
                <Button symbol={'='} operator />
            </div>
        </div>
    )
}
