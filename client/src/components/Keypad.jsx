import React from 'react'
import Button from './Button'
import LargeButton from './LargeButton'
import MultiButton from './MultiButton'
import DecimalButton from './DecimalButton'
import PlusMinusButton from './PlusMinusButton'

export default function Keypad({ update }) {
    return (
        <div className='keypad'>
            <div className='row'>
                <Button symbol={'1'} update={update} />
                <Button symbol={'2'} update={update} />
                <Button symbol={'3'} update={update} />
                <Button symbol={'÷'} operator update={update} />
            </div>
            <div className='row'>
                <Button symbol={'4'} update={update} />
                <Button symbol={'5'} update={update} />
                <Button symbol={'6'} update={update} />
                <MultiButton symbol={'*'} update={update} />
            </div>
            <div className='row'>
                <Button symbol={'7'} update={update} />
                <Button symbol={'8'} update={update} />
                <Button symbol={'9'} update={update} />
                <Button symbol={'+'} operator update={update} />
            </div>
            <div className='row'>
                <Button symbol={'0'} update={update} />
                <DecimalButton symbol={'.'} update={update} />
                <PlusMinusButton symbol={'+/-'} update={update} />
                <Button symbol={'-'} operator update={update} />
            </div>
            <div className='row'>
                <LargeButton symbol={'CLEAR'} update={update} />
                <Button symbol={'='} operator update={update} />
            </div>
        </div>
    )
}
