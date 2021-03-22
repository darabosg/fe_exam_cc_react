import React, { useState } from 'react'
import Subscription from './Subscription'

const Hotel = ({ hotel }) => {
    const [isDetailsShown, setIsDetailsShown] = useState(false)
    const [isSubShown, setIsSubShown] = useState(false)

    const showDetails = () => {
        setIsDetailsShown(!isDetailsShown)
    }

    const showSub = () => {
        setIsSubShown(true)
    }

    return (
        <div>
            <h2>{hotel.name}</h2>
            {isDetailsShown && (
                <div>
                    {' '}
                    <p>{`${hotel.stars}  ${hotel.city}`}</p>{' '}
                    <button onClick={showSub}>Request more info</button>
                </div>
            )}
            <button onClick={showDetails}>
                {isDetailsShown ? 'show less' : 'show more'}
            </button>
            {isSubShown && isDetailsShown && (
                <Subscription setIsSubShown={setIsSubShown} hotel={hotel} />
            )}
        </div>
    )
}

export default Hotel
