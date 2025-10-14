import React from 'react'
import './HomeCards.css'
import cardData from './CardData'

export const HomeCards = (props) => {
    return (
        <>
            <div className='home__cards'>
                <p>{props.heading}</p>
                <p>{props.count}</p>
            </div>
        </>
    )
}
